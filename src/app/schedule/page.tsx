import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { person, schedule, baseURL } from "@/resources";
import styles from "./schedule.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: schedule.title,
    description: schedule.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(schedule.title)}`,
    path: schedule.path,
  });
}

export default function SchedulePage() {
  return (
    <div className={styles.container}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={schedule.title}
        description={schedule.description}
        path={schedule.path}
        image={`/api/og/generate?title=${encodeURIComponent(schedule.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${schedule.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column className={styles.content} horizontal="center">
        <Column className={styles.header} horizontal="center" marginBottom="xl">
          <Heading variant="display-strong-l" className={styles.title}>
            Schedule a Meeting
          </Heading>
          <Text 
            variant="body-default-l" 
            onBackground="neutral-weak" 
            className={styles.subtitle}
          >
            Let's discuss your project, collaboration opportunities, or just have a conversation about technology and innovation.
          </Text>
        </Column>

        <div className={styles.calendarContainer}>
          <div className="tidycal-embed" data-path="thomasazar"></div>
          <script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
        </div>

        <Column className={styles.info} horizontal="center" marginTop="xl">
          <Text variant="body-default-m" onBackground="neutral-weak" className={styles.infoText}>
            Looking forward to connecting with you!
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak" className={styles.infoText}>
            {person.name} • {person.role}
          </Text>
        </Column>
      </Column>
    </div>
  );
}
