const FeatureDashboardSegment = ({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) => {
  return (
    <div className="">
      <h2>{title}</h2>

      <div>{children}</div>
    </div>
  )
}

export default FeatureDashboardSegment
