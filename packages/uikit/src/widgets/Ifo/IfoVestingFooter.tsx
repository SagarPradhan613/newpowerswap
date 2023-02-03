import styled from "styled-components";
import { useMemo } from "react";
import { Flex, Text, Skeleton } from "@pancakeswap/uikit";
import { format } from "date-fns";
import { useTranslation } from "@pancakeswap/localization";

const StyledIfoVestingFooter = styled(Flex)`
  padding: 16px;
  margin: 0 -12px -12px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export interface FooterEntryProps {
  label: string;
  value: string;
}

const FooterEntry: React.FC<React.PropsWithChildren<FooterEntryProps>> = ({ label, value }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text bold fontSize="12px" color="textSubtle" textTransform="uppercase">
        {label}
      </Text>
      {value ? (
        <Text bold small textAlign="right">
          {value}
        </Text>
      ) : (
        <Skeleton height={21} width={80} />
      )}
    </Flex>
  );
};

interface IfoVestingFooterProps {
  duration: number;
  vestingStartTime: number | undefined;
  releaseRate: string;
}

const IfoVestingFooter: React.FC<React.PropsWithChildren<IfoVestingFooterProps>> = ({
  duration,
  vestingStartTime,
  releaseRate,
}) => {
  const { t } = useTranslation();

  const releaseDate = useMemo(() => {
    const currentTimeStamp = new Date().getTime();
    const date = vestingStartTime === 0 ? currentTimeStamp : ((vestingStartTime || 0) + duration) * 1000;
    return format(date, "MM/dd/yyyy HH:mm");
  }, [vestingStartTime, duration]);

  return (
    <StyledIfoVestingFooter flexDirection="column">
      <FooterEntry label={t("Release rate")} value={t("%releaseRate% per second", { releaseRate })} />
      <FooterEntry label={t("Fully released date")} value={releaseDate} />
    </StyledIfoVestingFooter>
  );
};

export default IfoVestingFooter;