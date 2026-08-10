import { useState, useEffect } from "react";

const CLAUDE_JOB_QUEUE = [
{ id:1700000001000, title:"Academic Program Specialist", org:"Hunter College (CUNY)", location:"New York, NY — in-person", salary:"$86,741–$94,909", postedDate:"", appliedDate:"2026-01-20", status:"Ghosted", url:"https://cuny.jobs/search/?q=31381&campus=hunter-college", requirements:"Manage day-to-day admin of alternative certification and teacher prep programs.\n\nRequired: Bachelor's + 4 years related experience.\nPreferred: nonprofit/higher ed experience, project management, Excel/data analysis.", notes:"Job ID 31381. Review began 12/08/2025. Applied 1/20. No response as of 4/21.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:9, enjoyment:5, school:5, location:7, mph:4, mission:7 }, scoreRationale:{ qualification:"Exceeds all requirements — program ops, admin, records management, compliance reporting, and stakeholder coordination all map directly.", enjoyment:"Admin-heavy which is good, but includes participant-facing work and implicit supervisory language that cut against what she wants.", school:"Hunter College is almost certainly in-person; daily presence would be demanding alongside an evening MPH schedule.", location:"Ridgewood to Hunter (68th & Lex) is ~40 min on the M/E — workable but daily in-person commute adds up.", mph:"Teacher prep program admin is education equity work but doesn't build directly toward public health policy or evaluation.", mission:"CUNY serves underrepresented urban communities and teacher prep for underserved schools is genuinely equity-aligned." } },
{ id:1700000002000, title:"Administrative Specialist — CHASM", org:"CUNY School of Medicine", location:"New York, NY — City College, Harlem", salary:"$70,815–$86,741", postedDate:"", appliedDate:"2026-01-20", status:"Ghosted", url:"https://cuny.jobs/search/?q=30601", requirements:"Report to Chair of CHASM. Invoice processing, fiscal recordkeeping, scheduling, accreditation support, faculty dossiers.\n\nRequired: Bachelor's + 4 years relevant experience.", notes:"Job ID 30601. Review began October 13, 2025. Applied 1/20. No response as of 4/21.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:9, enjoyment:8, school:6, location:7, mph:9, mission:9 }, scoreRationale:{ qualification:"Admin support, fiscal records, faculty dossiers, data collection, scheduling, and vendor coordination all map directly to her background.", enjoyment:"Almost entirely back-end with no client-facing work or direct reports — supporting a research/academic department chair is close to ideal.", school:"City College (Harlem) is likely in-person but academic departments often offer more schedule flexibility than nonprofits.", location:"Harlem is ~35 min from Ridgewood on the A/C — very workable for a daily commute.", mph:"CHASM's research focus — health disparities, community health, epidemiology, health policy — is exactly the pipeline she's building toward at CUNY SPH.", mission:"The department's entire mission is health equity and underserved communities; as aligned as it gets." } },
{ id:1700000003000, title:"Academic ASAP Student Advisor", org:"Borough of Manhattan CC (CUNY)", location:"New York, NY — downtown Manhattan", salary:"$68,364–$74,490", postedDate:"", appliedDate:"2026-01-20", status:"Ghosted", url:"https://cuny.jobs/search/?q=31617", requirements:"Holistic academic advising and mentoring to a caseload of 150 students.\n\nRequired: Bachelor's (Master's preferred) + 4 years related experience.", notes:"Job ID 31617. Closed January 30, 2026. Applied 1/20. No response.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:7, enjoyment:2, school:4, location:8, mph:4, mission:7 }, scoreRationale:{ qualification:"Her background in caseload coordination and records management transfers, but she has no direct student advising experience.", enjoyment:"Caseload of 150 students, direct mentoring, workshops, recruitment outreach — essentially direct service, the opposite of what she wants.", school:"Structured mandatory hours including required late nights or Saturdays — least flexible option for an MPH student.", location:"BMCC is in downtown Manhattan — easy commute from Ridgewood.", mph:"Academic advising at a community college doesn't build toward public health policy or research pipelines.", mission:"ASAP serves first-gen, low-income students — strong equity alignment even if the role itself isn't a fit." } },
{ id:1700000004000, title:"Administrative Coordinator — Social Work", org:"Lehman College (CUNY)", location:"Bronx, NY — Bedford Park (in-person)", salary:"$68,668–$77,269", postedDate:"", appliedDate:"2026-01-20", status:"Ghosted", url:"https://cuny.jobs/search/?q=31476", requirements:"Chair's office admin support for the Department of Social Work.\n\nFull-time, 35 hrs/week, on-campus 9am–5pm.", notes:"Job ID 31476. Closed February 11, 2026. Applied 1/20. No response.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:9, enjoyment:8, school:6, location:4, mph:6, mission:8 }, scoreRationale:{ qualification:"Chair's office admin, records, event planning, faculty coordination, compliance tracking — maps cleanly onto her entire nonprofit ops background.", enjoyment:"Pure back-end admin with no direct caseload — supporting a department chair in a collaborative academic environment is close to ideal.", school:"On-campus 9–5 with limited remote; academic departments can offer informal flexibility but nothing guaranteed.", location:"Lehman is in Bedford Park, Bronx — roughly 60–70 min from Ridgewood, longest commute in the batch.", mph:"Social Work dept in a Health Sciences school with a health equity institute — more MPH-adjacent than most.", mission:"Social Work dept serving the Bronx with a health equity focus; strong mission alignment." } },
{ id:1700000005000, title:"Administrative Coordinator — Libraries", org:"City College of New York (CUNY)", location:"New York, NY — Harlem (in-person)", salary:"$66,154–$77,269", postedDate:"", appliedDate:"2026-01-20", status:"Ghosted", url:"https://cuny.jobs/search/?q=31588", requirements:"Report to Associate Dean and Chief Librarian. Administrative support to all divisional libraries. Budget management, personnel records, hiring coordination.\n\nRequired: Bachelor's degree.", notes:"Job ID 31588. Closed March 14, 2026. Applied 1/20. No response.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:9, enjoyment:8, school:6, location:7, mph:4, mission:6 }, scoreRationale:{ qualification:"Budget admin, accounts payable, purchasing, personnel records, hiring coordination — all directly parallel to her ops and admin background.", enjoyment:"Quietly back-end: no caseload, no student-facing work, no direct reports — clean administrative ops supporting a library system.", school:"City College (Harlem) is in-person but academic admin roles can be more flexible than they appear.", location:"Harlem is ~35 min from Ridgewood on the A/C.", mph:"Library admin doesn't connect to public health pipelines.", mission:"CUNY's public education mission is equity-aligned but library admin is several steps removed from community health work." } },
{ id:1700000006000, title:"Enrollment Registrar Specialist", org:"Hunter College — School of Social Work (CUNY)", location:"New York, NY — Upper East Side", salary:"$82,663–$94,909", postedDate:"", appliedDate:"", status:"Saved", url:"https://cuny.jobs/new-york-ny/enrollment-registrar-specialist-school-of-social-work/3597B721EA9742A4A9B0E65431043B4C/job/", closeDate:"2026-07-07", requirements:"Maintain and update course and student data. Coordinate class schedules aligned with practicum requirements. Oversee LMSW and LCSW licensure certification processes. Manage and complete all Degree Audits. Serve as school liaison with Registrar's Office. Manage data related to field practicum and workshop requirements.\n\nRequired: Bachelor's + 4 years related experience.\nPreferred: Graduate degree, 2+ years supervisory, Excel/Access proficiency.", notes:"Job ID 32095. ⏰ SELF-IMPOSED TARGET DATE — actual posting is open until filled, no real deadline. First review wave began May 10, 2026, so she's past the initial cutoff but applications still accepted on a rolling basis.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:8, enjoyment:7, school:6, location:7, mph:5, mission:7 }, scoreRationale:{ qualification:"Strong match on data management, records, scheduling, and liaison work; preferred grad degree is a mild gap but her experience compensates.", enjoyment:"Mostly systems/data/process work rather than direct advising — managing schedules, degree audits, certification tracking is solidly back-end.", school:"Hunter is in-person but School of Social Work academic admin often has more schedule flexibility than student-facing roles.", location:"Hunter (68th & Lex) is ~40 min from Ridgewood on the M/E.", mph:"Social Work school context is health/equity adjacent; licensure and enrollment operations don't directly build public health skills.", mission:"School of Social Work serving urban populations is genuinely mission-aligned." } },
{ id:1700000007000, title:"Administrative Coordinator — OIACER", org:"City College of New York (CUNY)", location:"New York, NY — Harlem (in-person)", salary:"$72,236–$77,269", postedDate:"", appliedDate:"", status:"Withdrawn", url:"https://www.idealist.org/en/job/4ac36fb804a84d48a0a4a8858b12666b-administrative-coordinator-aheo-city-college-of-new-york-new-york", closeDate:"2026-04-27", requirements:"Manage AED's calendar, scheduling, work plans. Admin support for fundraising operations. Co-manage general email and voicemail inboxes. Event planning logistics. Data entry and reporting.\n\nRequired: Bachelor's degree.", notes:"Job ID 32005. CLOSES APRIL 27, 2026.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:8, enjoyment:7, school:6, location:7, mph:3, mission:6 }, scoreRationale:{ qualification:"Calendar management, donor comms, event logistics, CRM/database work, vendor coordination — her ops and Salesforce background maps well.", enjoyment:"Clean back-end ops supporting senior leadership with no direct reports; fundraising context is neutral but the work itself suits her style.", school:"CCNY Harlem campus — likely in-person but a known and manageable situation.", location:"Harlem is ~35 min from Ridgewood on the A/C.", mph:"Institutional advancement/fundraising has almost no connection to public health policy or research pipelines.", mission:"CUNY's mission to serve underrepresented students is real, but fundraising operations are several steps removed from direct community impact." } },
{ id:1700000008000, title:"Lead Data Coordinator/Analyst — Property Mgmt", org:"NYC Dept of Housing Preservation & Development", location:"New York, NY — All Boros", salary:"$62,868–$72,298", postedDate:"2026-04-15", appliedDate:"", status:"Withdrawn", url:"https://cityjobs.nyc.gov/job/lead-data-coordinator-analyst-for-the-division-of-property-management-in-nyc-all-boros-jid-42757", closeDate:"2026-04-27", requirements:"Support the Division of Property Management in compliance with federal lead safety laws. Manage vendor and inspector work assignments. Review vendor documentation. Track compliance processes, generate reports.\n\nRequired: Bachelor's + 2 years experience. No exam required.", notes:"Job ID 42757. Posted April 15, 2026.", tuitionNote:"", scores:{ qualification:7, enjoyment:7, school:6, location:6, mph:6, mission:8 }, scoreRationale:{ qualification:"Vendor coordination, compliance documentation, records management, tracking and reporting all map well; the lead regulatory specifics are learnable.", enjoyment:"Entirely back-end: document review, compliance tracking, vendor assignment, report generation — no direct service caseload.", school:"All Boros location likely means a Manhattan office; hybrid possible but not guaranteed.", location:"Likely downtown Manhattan (100 Gold St is HPD HQ) — reasonable commute from Ridgewood.", mph:"Lead safety is a real public health issue; working in regulatory compliance at HPD is a legitimate entry point to the housing/public health policy world.", mission:"HPD's mission around affordable housing preservation and tenant protection is strongly aligned with her values." } },
{ id:1700000010000, title:"Community Initiatives Coordinator", org:"NYC Service / Office of the Mayor", location:"New York, NY — 253 Broadway, Manhattan", salary:"$64,000", postedDate:"2026-03-25", appliedDate:"", status:"Withdrawn", url:"https://cityjobs.nyc.gov/job/community-initiatives-coordinator-in-manhattan-jid-42093", closeDate:"2026-05-23", requirements:"Lead volunteer capacity building for CBOs citywide. Manage funding portfolio. Analyze survey data. Facilitate training series. Weekend/evening availability required.\n\nRequired: Bachelor's + 3 years experience.", notes:"Job ID 42093. Posted March 25, 2026. Open until May 23. PSLF eligible. Mixed fit — funding/data work good, outreach and weekend availability concerns.", tuitionNote:"", scores:{ qualification:8, enjoyment:5, school:7, location:8, mph:5, mission:7 }, scoreRationale:{ qualification:"3+ years admin/coordination, Salesforce, Excel, data analysis, stakeholder management — maps cleanly to her background.", enjoyment:"Funding management and data tracking are solid back-end work, but outreach attendance and weekend/evening availability cut against what she wants.", school:"Mayor's Office culture tends toward flexibility; PSLF eligible. Weekend requirement is a real scheduling conflict.", location:"253 Broadway is downtown Manhattan — very easy commute from Ridgewood.", mph:"Volunteerism/civic engagement doesn't build directly toward public health policy, but grant oversight and CBO data evaluation have some transferability.", mission:"Mayor's Office civic mission is genuine; CBO/community-facing work is values-aligned." } },
{ id:1700000011000, title:"Assistant Project Manager — Compliance & Enforcement", org:"NYC Dept of Housing Preservation & Development", location:"New York, NY — All Boros (hybrid 2d remote)", salary:"$62,868–$72,298", postedDate:"2026-04-22", appliedDate:"", status:"Withdrawn", url:"https://cityjobs.nyc.gov/job/assistant-project-manager-for-the-division-of-compliance-and-enforcement-in-nyc-all-boros-jid-42982", closeDate:"2026-05-21", requirements:"Manage portfolio of buildings through Housing Incentives compliance enforcement (421-a, J-51, 485-x, 467-m, Inclusionary Housing). Investigate non-compliance, draft revocation notices and reinstatement agreements. Track milestones. Coordinate with HPD units, city agencies, property owners, and tenants.\n\nRequired: Bachelor's + 2 years experience. No exam required.", notes:"Posted April 22, 2026. Closes May 21. Hybrid — up to 2 days remote. HIGHEST SCORE IN TRACKER (77%). APPLY.", tuitionNote:"", scores:{ qualification:8, enjoyment:8, school:7, location:6, mph:7, mission:9 }, scoreRationale:{ qualification:"Project portfolio management, compliance tracking, stakeholder coordination, written reports and correspondence, Excel — maps directly. Housing experience at Brilliant Corners and UWKC is a genuine asset.", enjoyment:"Almost entirely back-end: managing a building portfolio through a defined enforcement process, drafting correspondence, tracking milestones. No direct service caseload.", school:"Hybrid up to 2 days remote — better than most city roles for MPH schedule flexibility.", location:"All Boros — likely HPD HQ at 100 Gold St, downtown Manhattan. Reasonable from Ridgewood.", mph:"421-a, J-51, rent stabilization, affordability enforcement — housing policy at the regulatory level. Directly adjacent to the housing/health nexus.", mission:"Enforcement of affordable housing benefits to protect rent-stabilized tenants. As close to direct housing equity work as you get without being a case manager." } },
{ id:1700000012000, title:"Project Coordinator II — Sociomedical Sciences", org:"Columbia University Mailman School of Public Health", location:"New York, NY — Washington Heights", salary:"$72,000–$78,300", postedDate:"2026-04-08", appliedDate:"", status:"Withdrawn", url:"https://opportunities.columbia.edu/jobs/project-coordinator-columbia-university-medical-center-new-york-united-states-80518182-19b9-4846-85de-3fa03670027e", closeDate:"", requirements:"Support coordination, data analysis, and report writing for the Community Advisory Project — HIV cohort study in collaboration with NYC DOHMH and NYS DOH. Develop analytical datasets (40%). Coordinate staff and collaborators (30%). Manage budget and personnel (10%).\n\nRequired: Bachelor's + 3 years. Preferred: Master's, Stata/R/Python.", notes:"Posted April 8, 2026. Posting has closed. Skip: 40% statistical analysis is a hard gap. Strong mission/MPH alignment — watch for coordinator-only roles in similar HIV/public health units.", tuitionNote:"", scores:{ qualification:4, enjoyment:7, school:7, location:6, mph:9, mission:9 }, scoreRationale:{ qualification:"Project coordination side maps well, but 40% of role is statistical analysis in Stata/R/Python — a hard gap. Also requires supervising staff.", enjoyment:"The coordination, budget, and stakeholder communication components are genuinely back-end, but data analysis load and supervisory duties undercut fit.", school:"Columbia academic environment likely offers schedule flexibility.", location:"Washington Heights is ~45 min from Ridgewood — manageable.", mph:"HIV health equity, social determinants, NYC DOHMH collaboration — exactly the work she'd be doing after the MPH.", mission:"HIV/AIDS health equity and service planning for underserved NYC communities. Extremely aligned." } },
{ id:1700000013000, title:"Project Manager — Family Self-Sufficiency Program", org:"NYC Housing Authority (NYCHA) — REES", location:"Brooklyn, NY", salary:"$62,868–$85,000", postedDate:"2026-04-21", appliedDate:"", status:"Withdrawn", url:"https://cityjobs.nyc.gov/job/project-manager-family-self-sufficiency-fss-program-in-brooklyn-jid-42912", closeDate:"2026-06-19", requirements:"Manage FSS program (HUD-funded, Section 8 voucher holders). Provide case management, develop individualized service plans, quarterly assessments. Data tracking and HUD reporting. Manage 80+ CBO partnerships.\n\nRequired: Bachelor's + 2 years. TEMPORARY — expires Dec 31, 2026.", notes:"Posted April 21, 2026. TEMPORARY — grant-funded, expires December 31, 2026. Direct service caseload + expiration 4 months into MPH = double dealbreaker. Posting closed June 19, 2026 without application — moved to Withdrawn.", tuitionNote:"", scores:{ qualification:8, enjoyment:3, school:3, location:5, mph:7, mission:9 }, scoreRationale:{ qualification:"Project management, HUD compliance, data tracking, partner coordination, Section 8 context — maps well.", enjoyment:"Caseload of FSS participants with individualized service plans, quarterly assessments, referrals — case management dressed up as project management.", school:"Temporary through December 31, 2026 — expires four months into MPH start. Case management hours would conflict badly.", location:"Brooklyn — doable from Ridgewood but not the easiest commute.", mph:"Economic mobility, housing stability, Section 8 policy, HUD programming — legitimately on the housing/public health pipeline.", mission:"NYCHA Section 8 residents building financial self-sufficiency. Strongly values-aligned." } },
{ id:1700000014000, title:"Administrative Coordinator — Student Services, Social Work", org:"Hunter College — School of Social Work (CUNY)", location:"New York, NY — Upper East Side", salary:"$63,003–$72,236", postedDate:"2026-06-06", appliedDate:"", status:"Saved", url:"https://cuny.jobs/new-york-ny/administrative-coordinator-student-services-school-of-social-work/3937A8A0EAD44A8D8733A3C9BAD119FF/job/", closeDate:"2026-07-08", requirements:"Reporting to Director of Student Services. Maintains and updates files and records. Schedules interviews and appointments for academic advisors. Manages graduate form submission process. Updates and posts semester schedules on departmental website. Drafts and sends correspondence to students and faculty. Assists with planning and logistics of special events, commencement. Supervises college assistants. Assists Dean's office with ad hoc coverage.\n\nRequired: Bachelor's degree.\nPreferred: Two years experience in academic setting.", notes:"Job ID 32303. Posted June 2026. ⏰ SELF-IMPOSED TARGET DATE — actual posting is open until filled, no real deadline. Review began June 15, applications still accepted on rolling basis. Explicitly 'highly student-facing' — concern for enjoyment score. Hunter SSW campus.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:8, enjoyment:4, school:6, location:7, mph:5, mission:7 }, scoreRationale:{ qualification:"Records management, scheduling, correspondence, event logistics, website updates, presentation prep — maps cleanly to her background.", enjoyment:"'Highly student-facing' explicitly called out. Scheduling advisor appointments, student correspondence, supervising college assistants, commencement logistics — more student services than back-end admin.", school:"Hunter in-person but academic departments tend to have schedule flexibility. Review starts June 15.", location:"Hunter Upper East Side — ~40 min from Ridgewood on the M/E.", mph:"School of Social Work context is health/equity adjacent but student services work doesn't build directly toward public health.", mission:"Social Work school serving urban populations, strong values alignment." } },
{ id:1700000015000, title:"Administrative Coordinator — Business Office", org:"Hunter College (CUNY)", location:"New York, NY — Upper East Side", salary:"$84,815–$94,409", postedDate:"2026-06-06", appliedDate:"", status:"Saved", url:"https://cuny.jobs/new-york-ny/administrative-coordinator-business-office/32304/", closeDate:"2026-07-14", requirements:"Reporting to Administrative Executive Assistant. Manage system access process for staff (form completion, ticket creation, follow-up). Assist with non-tax levy appointments process. Enter and maintain employee timesheet records. Process and submit expense and purchasing requests. Coordinate P-card, T-card, NET Card administration. Create and enter requisitions. Train new staff on CUNYBuy and business systems. Distribute non-tax levy allocation reports. Update and maintain departmental budget and expense spreadsheets. Maintain confidential records.\n\nRequired: Bachelor's degree.\nPreferred: Two years higher ed and/or fiscal admin. Microsoft Office. PeopleSoft/CUNYFirst experience.", notes:"Job ID 32304. Posted June 2026. ⏰ SELF-IMPOSED TARGET DATE Jul 14 — actual posting is open until filled. Review began June 15, applications still accepted on rolling basis. Highest-scoring new role — pure back-end fiscal ops, no student-facing work, strong salary. APPLY.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:9, enjoyment:9, school:7, location:7, mph:4, mission:6 }, scoreRationale:{ qualification:"Expense processing, budget spreadsheets, requisitions, system access management, timesheet records, P-card admin — directly parallels her ops and fiscal coordination background. CUNYBuy is learnable.", enjoyment:"Pure back-end fiscal ops. No student-facing work, no caseload, no events. Reporting to an Executive Assistant. Cleanest back-end role in the tracker.", school:"Hunter in-person but business office roles often have more schedule flexibility than academic affairs. Review begins June 15.", location:"Hunter Upper East Side — ~40 min from Ridgewood on the M/E.", mph:"Business office ops doesn't build toward public health directly, but CUNY tuition waiver is the pipeline to the MPH.", mission:"CUNY mission is genuine even if this role is operationally removed from it." } },
{ id:1700000016000, title:"Public Housing Outreach & Advocacy Coordinator", org:"NYC Mayor's Office to Protect Tenants (MOPT)", location:"New York, NY — 253 Broadway, Manhattan", salary:"$100,000–$105,000", postedDate:"2026-05-30", appliedDate:"", status:"Saved", url:"https://cityjobs.nyc.gov/job/public-housing-outreach-and-advocacy-coordinator-in-manhattan-jid-44098", closeDate:"2026-07-28", requirements:"Support NYCHA tenant organizing efforts including resident associations and citywide coalitions. Build relationships with residents, tenant leaders, and advocacy orgs. Facilitate listening sessions, town halls, and working groups. Serve as MOPT's liaison to NYCHA on tenant protection and resident engagement. Bring NYCHA tenant perspectives into MOPT policy development. Prepare briefings, memos, and reports for MOPT leadership. Represent MOPT at community meetings and public hearings.\n\nRequired: Bachelor's + 2 years housing policy/government experience.\nPreferred: Direct NYCHA experience, multilingual (Spanish), familiarity with NYC government operations.", notes:"Posted May 30, 2026. Closes July 28. Mayor's Office to Protect Tenants — NYCHA tenant protection and housing justice. High mission/MPH alignment, good salary. Concern: community-facing facilitation work rather than back-end ops. PSLF eligible.", tuitionNote:"NYC agency, likely DC37-represented — DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:7, enjoyment:4, school:6, location:8, mph:8, mission:10 }, scoreRationale:{ qualification:"Housing policy context, stakeholder coordination, written communications, and interagency liaison work all map from her background. The organizing/advocacy framing is a stretch but not disqualifying.", enjoyment:"Facilitating town halls, building tenant coalitions, representing MOPT at community convenings — more external-facing than she wants, though not a direct caseload.", school:"Mayor's Office fast-paced culture; no schedule details but role has some flexibility implied. PSLF eligible.", location:"253 Broadway is downtown Manhattan — very easy commute from Ridgewood.", mph:"NYCHA tenant protection, housing justice, interagency housing policy — directly adjacent to the housing/public health nexus she's building toward.", mission:"Protecting NYCHA tenants from displacement, centering resident voices in city policy. As mission-aligned as anything in the tracker." } },
{ id:1700000017000, title:"Housing Assistant — NYCHA Brooklyn", org:"NYC Housing Authority (NYCHA)", location:"Brooklyn, NY — Nostrand Houses", salary:"$45,435–$73,638", postedDate:"2026-06-05", appliedDate:"", status:"Withdrawn", url:"https://cityjobs.nyc.gov/job/housing-assistant-in-brooklyn-jid-42996", closeDate:"2026-06-25", requirements:"Support management of Nostrand Houses under the Trust and Project-Based Section 8 program. Process annual/interim recertifications. Interview residents; investigate and verify information. Serve as liaison to tenants for open tenancy issues. Respond to resident complaints. Conduct field visits for rent collection, home visits, surveys. Manage unsubsidized/unauthorized households. Attend administrative hearings and court appearances. Maintain accurate records in NYCHA systems.\n\nRequired: Bachelor's or associate's + 1 year housing management experience. Competitive civil service title — exam may be required.", notes:"Posted June 5, 2026. ❌ Posting closed June 25 without application. Competitive civil service title — exam may be required. Direct tenant-facing work including home visits, hearings, complaint resolution. Salary floor low ($45k).", tuitionNote:"NYC agency, likely competitive civil service/DC37 — DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:7, enjoyment:3, school:4, location:5, mph:6, mission:9 }, scoreRationale:{ qualification:"Section 8/public housing context maps from Brilliant Corners; records, compliance, HUD familiarity all transfer. Civil service exam may be a barrier.", enjoyment:"Tenant interviews, home visits, complaint resolution, court appearances, recertifications — directly client-facing by definition.", school:"Competitive civil service title and Brooklyn location add friction. Closes June 25 — limited runway.", location:"Nostrand Houses, Brooklyn — doable from Ridgewood but not convenient.", mph:"Public housing operations, HUD Section 8, tenant rights — adjacent to housing/health equity pipeline.", mission:"NYCHA residents and housing preservation. Strongly values-aligned." } },
{ id:1700000018000, title:"HOPWA Program Analyst", org:"NYC Dept of Health & Mental Hygiene — BHHS", location:"Queens, NY — Long Island City (42-09 28th St)", salary:"$62,868–$72,298", postedDate:"2026-05-19", appliedDate:"", status:"Saved", url:"https://cityjobs.nyc.gov/job/hopwa-program-analyst-bureau-of-hepatitis-hiv-and-sti-in-queens-jid-43806", closeDate:"2026-07-18", requirements:"Manage portfolio of HOPWA-funded housing vendors for HIV Care and Treatment Program. Annual programmatic site visits and apartment habitability inspections. Monitor contract performance in eCOMPAS system. Prepare site visit findings, identify gaps, conduct housing violation searches. Quarterly compliance meetings. Technical assistance and capacity building trainings for housing providers. Support annual HOPWA grant application.\n\nRequired: Bachelor's + 2 years community work experience. No exam required.\nPreferred: Knowledge of HOPWA/HUD reporting, HIV housing policy, experience with homelessness/HIV populations.", notes:"Job ID 43806 (seat 1 of 2 — near-identical posting also at JID 43826). Posted May 19, 2026. Closes July 18. PSLF eligible. Highest qualification match in entire tracker — FHSP vendor monitoring, HUD compliance, housing provider oversight maps directly from Brilliant Corners. Field site visits are the main enjoyment concern. ⚠️ Commute revised: Dec 2025 M/F service swap means M no longer stops at Queens Plaza/Court Sq on weekdays — likely needs a transfer, not a direct ride. Worth confirming actual route.", tuitionNote:"NYC agency (DOHMH), likely DC37-represented — DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:9, enjoyment:6, school:5, location:5, mph:8, mission:9 }, scoreRationale:{ qualification:"She literally does this job right now — FHSP vendor portfolio, HUD compliance, housing provider monitoring, compliance reporting, site visit coordination all translate directly. Highest qualification score in the tracker.", enjoyment:"Core work is vendor portfolio management, compliance tracking, and contract performance monitoring — genuinely back-end. Field site visits and apartment inspections pull it slightly off pure back-end, but this isn't a caseload role.", school:"Up to 2 days WFH mentioned, helps offset commute uncertainty.", location:"42-09 28th St, Long Island City. Revised down from initial estimate — Dec 2025 M/F weekday swap means the M no longer serves Queens Plaza/Court Sq on weekdays, so this likely requires a transfer, not a single-seat ride.", mph:"Ryan White Part A, HOPWA, HIV housing policy, HUD programming — directly adjacent to the housing/public health nexus she's building toward at CUNY SPH.", mission:"Housing stability for people living with HIV experiencing homelessness. Intersection of the two most values-aligned issue areas in the tracker." } },
{ id:1700000019000, title:"HOPWA Program Analyst (Seat 2)", org:"NYC Dept of Health & Mental Hygiene — BHHS", location:"Queens, NY — Long Island City (42-09 28th St)", salary:"$62,868–$72,298", postedDate:"2026-05-19", appliedDate:"", status:"Saved", url:"https://cityjobs.nyc.gov/job/hopwa-program-analyst-bureau-of-hepatitis-hiv-and-sti-in-queens-jid-43826", closeDate:"2026-07-18", requirements:"Manage portfolio of HOPWA-funded housing vendors. Annual programmatic site visits and apartment habitability inspections. Monitor monthly contract performance in eCOMPAS. Quarterly compliance meetings. Technical assistance and capacity building for housing providers. Support annual HOPWA grant application.\n\nRequired: Bachelor's + 2 years community work experience. No exam required.\nPreferred: HOPWA/HUD reporting knowledge, HIV housing policy, populations affected by homelessness and HIV.", notes:"Job ID 43826 (seat 2 — near-identical to JID 43806). Same role, two open positions. Closes July 18. PSLF eligible. Apply to both.", tuitionNote:"NYC agency (DOHMH), likely DC37-represented — DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:9, enjoyment:6, school:5, location:5, mph:8, mission:9 }, scoreRationale:{ qualification:"Same as seat 1 — direct translation from FHSP vendor portfolio management, HUD compliance, and housing provider monitoring at Brilliant Corners.", enjoyment:"Same as seat 1 — back-end compliance/portfolio work with field site visit component.", school:"Same as seat 1 — up to 2 days WFH helps offset commute uncertainty.", location:"42-09 28th St LIC — same building as seat 1. Revised down — Dec 2025 M/F weekday swap means the M no longer serves Queens Plaza/Court Sq on weekdays.", mph:"Ryan White, HOPWA, HIV housing policy — same strong pipeline alignment.", mission:"Same as seat 1 — HIV housing stability is the housing/health equity intersection at its most direct." } },
{ id:1700000020000, title:"Project Manager", org:"Mayor's Office of Contract Services (MOCS)", location:"New York, NY — 255 Greenwich St, downtown Manhattan", salary:"$70,000–$80,000", postedDate:"2026-05-28", appliedDate:"", status:"Saved", url:"https://cityjobs.nyc.gov/job/project-manager-in-manhattan-jid-44024", closeDate:"2026-07-26", requirements:"Support MOCS Executive Team. Manage Director's calendar in partnership with Executive Assistant. Track external engagements and ensure briefing materials delivered on time. Draft briefing memos and background documents. Track follow-up actions and deliverables. Prepare agendas and minutes. Plan staff engagement events. Triage issues escalated to Executive Team. Special projects as assigned.\n\nRequired: Bachelor's degree (or associate's + 2 years, or HS + 4 years admin experience). No exam required.\nPreferred: Executive-level calendar management, high-volume deliverable tracking, strong written/verbal communication, comfort with ambiguity.", notes:"Job ID 44024 / Job ID 781172. Posted May 28, 2026. Closes July 26. PSLF eligible. Mayor's Office of Contract Services — citywide procurement oversight. Executive office coordinator role despite 'Project Manager' title. Fast-paced, entrepreneurial culture language is a mild concern.", tuitionNote:"NYC agency (MOCS), likely DC37-represented — DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:7, enjoyment:6, school:6, location:8, mph:3, mission:5 }, scoreRationale:{ qualification:"Calendar/deliverable management, briefing memos, stakeholder coordination, meeting logistics all map from her ops background. 'Entrepreneurial' framing and fast executive pace is a slight stretch from nonprofit program ops.", enjoyment:"Largely back-end executive support — briefings, tracking, agendas. Mild concern around event planning duties (field day, staff appreciation) and fast-paced ambiguity culture.", school:"Mayor's office — no explicit hybrid policy, but city exec offices often have flexibility. PSLF eligible.", location:"255 Greenwich is downtown Manhattan — very easy commute from Ridgewood, among the best in the tracker.", mph:"Procurement oversight has essentially no public health pipeline.", mission:"City government transparency and procurement efficiency — real civic value but not values-core." } },
{ id:1700000021000, title:"Operations Analyst", org:"NYC Dept of Youth & Community Development (DYCD)", location:"New York, NY — 2 Lafayette St, downtown Manhattan", salary:"$62,868–$97,593", postedDate:"2026-02-07", appliedDate:"2026-07-02", status:"Applied", url:"https://cityjobs.nyc.gov/job/operations-analyst-in-manhattan-jid-40434", closeDate:"2026-07-03", requirements:"Build and enhance data-driven operational tools, processes, and workflows for DYCD Youth Services. Collect, format, and analyze complex data to identify trends. Communicate with contractors on policy, requirements, and technical assistance. Review contract/performance documents, ensure provider compliance. Complete performance reports and data requests. Identify deficiencies and document recommendations. Monitor program submission of documentation and data entry.\n\nRequired: Bachelor's + 2 years experience. No exam required.\nPreferred: MS 365/Excel proficiency, data collection survey platforms, Power Automate, large dataset management, project management.", notes:"Job ID 766438. Posted February 7, 2026. Closes July 3. PSLF eligible. Back-end data and ops role at DYCD. Youth afterschool programs — not MPH-aligned but the work itself is genuinely back-end. Salary ceiling is strong at $97k. Same office as Operations Systems Specialist (JID 40432).", tuitionNote:"NYC agency (DYCD), likely DC37-represented — DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:8, enjoyment:7, school:6, location:8, mph:4, mission:6 }, scoreRationale:{ qualification:"Data systems, compliance tracking, contractor communications, performance reporting, documentation review — maps cleanly to her ops and data background at Brilliant Corners.", enjoyment:"Back-end data and ops with contractor technical assistance as the most external element — genuinely low-caseload, systems-focused work.", school:"Downtown Manhattan city agency — no explicit hybrid info but city agency standard. PSLF eligible.", location:"2 Lafayette St is downtown Manhattan — very easy commute from Ridgewood, among the best in the tracker.", mph:"Youth afterschool programming doesn't connect to public health pipelines, but the ops/data skills are transferable.", mission:"DYCD youth community development is equity-aligned even if not housing/health core." } },
{ id:1700000023000, title:"Contract Manager — Population Health Data Science", org:"NYC Dept of Health & Mental Hygiene — CPHDS", location:"Queens, NY — Long Island City (30-30 47th Ave)", salary:"$68,214–$110,000", postedDate:"2026-05-13", appliedDate:"", status:"Saved", url:"https://cityjobs.nyc.gov/job/contract-manager-center-for-population-health-data-science-administration-in-queens-jid-43606", closeDate:"2026-07-11", requirements:"Manage full lifecycle procurement and contract administration for the Center for Population Health Data Science. RFPs, sole source procurements, intergovernmental agreements, contract amendments, scopes of work, vendor engagement. Coordinate with ACCO, General Counsel, Finance, and IT. Monitor contract expenditures and deliverables in PASSPort. Develop procurement tracking systems and dashboards. Provide managerial guidance to program and admin staff.\n\nRequired: Bachelor's + 5 years experience including 2 years managerial/executive capacity (Administrative Business Promoter title — exam may be required).\nPreferred: Graduate study may substitute for general experience year-for-year.", notes:"Job ID 780780 / JID 43606. Posted May 13, 2026. Closes July 11. PSLF eligible. CPHDS is DOHMH's health equity data modernization arm — five priority areas include Data for Equity & Social Justice and Advanced Epidemiology & Analytics. ⚠️ Exam may be required (Competitive-1: Administrative Business Promoter 1000C). Min quals require 2 years managerial/executive experience — her current Program Supervisor role at Brilliant Corners is the argument. Address in cover letter. ⚠️ Commute revised: Dec 2025 M/F service swap means the M no longer stops at Queens Plaza/Court Sq on weekdays — likely needs a transfer, not a direct ride.", tuitionNote:"NYC agency (DOHMH), Administrative Business Promoter title (Competitive-1) — likely DC37-represented. DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:6, enjoyment:8, school:5, location:5, mph:8, mission:9 }, scoreRationale:{ qualification:"Full lifecycle contract/procurement maps directly from BC ops background. Gap is the explicit 2-year managerial/executive requirement and competitive civil service title — her Program Supervisor role is the argument, but it's a stretch vs. a contract-specific management track.", enjoyment:"Procurement planning, vendor management, scope drafting, budget monitoring, PASSPort tracking — genuinely back-end contract ops with no caseload. One of the cleanest work profiles in the tracker.", school:"DOHMH standard up to 2 days WFH, helps offset commute uncertainty.", location:"30-30 47th Ave, LIC. Revised down from initial estimate — Dec 2025 M/F weekday swap means the M no longer serves Queens Plaza/Court Sq on weekdays, so this likely requires a transfer.", mph:"CPHDS mandate is explicitly health equity data infrastructure — supporting that through procurement is directly adjacent to post-MPH public health work.", mission:"Center for Population Health Data Science: data systems for equity, social justice, and equitable health outcomes across NYC. As mission-aligned as anything in the tracker for an admin/ops role." } },
{ id:1700000024000, title:"Project Manager — Division of Tenant & Owner Resources", org:"NYC Dept of Housing Preservation & Development (HPD)", location:"New York, NY — 100 Gold St, downtown Manhattan", salary:"$62,868–$72,298", postedDate:"2026-05-20", appliedDate:"2026-07-02", status:"Applied", url:"https://cityjobs.nyc.gov/job/project-manager-for-the-division-of-tenant-and-owner-resources-in-nyc-all-boros-jid-43869", closeDate:"2026-07-19", requirements:"Maintain and prepare reports and statistical analyses on unit operations, performance, compliance, and projects for the Director's review. Assist with creation/design/implementation of reports in HPD's Business Intelligence systems. Represent the unit in internal and external meetings. Review internal and federal policy changes with the Director, assist training staff on changes. Propose, coordinate, and implement projects to maximize compliance and performance. Draft notices, procedure documents, letters, meeting materials, correspondence. Respond to inquiries from owners, HPD divisions, and stakeholders. Coordinate with HAS units and HPD divisions on tenant transfers, case assignments, reasonable accommodation requests.\n\nRequired: Bachelor's + 2 years community work experience (Community Coordinator title, Non-Competitive-5). No exam required.\nPreferred: Strong Excel/Access, BI systems experience, analytical/detail-oriented, ability to work with minimal supervision.", notes:"Job ID 781574. Posted May 20, 2026. Closes July 19. PSLF eligible. Non-Competitive-5 title — no exam required, unlike many other HPD/DOHMH roles. Sibling posting to the DTOR Coordinator role but without staff supervision or evening/weekend language — cleaner back-end fit. 100 Gold St is HPD HQ, same building as several other saves. One of the highest-scoring roles in the tracker.", tuitionNote:"NYC agency (HPD), likely DC37-represented (Community Coordinator title) — DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:8, enjoyment:8, school:6, location:8, mph:7, mission:8 }, scoreRationale:{ qualification:"Reports/statistical analysis, BI dashboard design, policy documentation, drafting correspondence, cross-division coordination map cleanly to her ops and compliance background. No staff supervision required, unlike the sibling Coordinator posting.", enjoyment:"Almost entirely back-end: reports, BI systems, policy documentation, inquiry response, cross-division coordination. Occasional meeting representation but no caseload — notably cleaner than the Coordinator version of this role.", school:"No evening/weekend language in this posting, unlike the Coordinator role. Standard city agency hours implied.", location:"100 Gold St is HPD HQ, downtown Manhattan — easy commute from Ridgewood, same building as several other tracked roles.", mph:"Section 8/HCV program analytics and HUD policy work — same housing/health nexus as other HPD and HOPWA roles in the tracker.", mission:"HPD's affordable housing mission, direct support of low-income families via rental subsidies. Strong values alignment." } },
{ id:1700000025000, title:"Tenant Organizer — Queens/Brooklyn", org:"Communities Resist (CoRe)", location:"Brooklyn/Queens — hybrid, fieldwork-heavy", salary:"$64,137–$107,931", postedDate:"", appliedDate:"", status:"Saved", url:"", closeDate:"2026-07-16", requirements:"Tenant organizing combating gentrification, displacement, and structural injustice, primarily in Brooklyn and Queens. Develop tenant associations; partner with staff attorneys to combat landlord harassment; protect tenants facing eviction; organize Know-Your-Rights workshops; conduct door-to-door outreach and canvassing; manage high caseload with case data tracking and grant reporting.\n\nRequired: 2+ years housing rights advocacy/organizing. Fluency in Spanish, Mandarin, Korean, Bengali, Arabic, or another language common in Brooklyn/Queens. Frequent evening/weekend availability. Ability to walk multiple flights of stairs, lift up to 20lbs, canvass outdoors.\nUnion position (UAW Local 2325), CBA step schedule, salary not negotiable. Rolling applications.", notes:"⏰ SELF-IMPOSED TARGET DATE — actual process is rolling applications by design, no real deadline. Direct community organizing role, not back-end ops. Mission is extremely aligned (anti-displacement work in her future neighborhood) but the role structure is the opposite of what she's optimizing for. Logged for completeness — low overall fit.", tuitionNote:"Nonprofit, UAW Local 2325-represented — no tuition benefit information available. Not a CUNY, NYC agency, or H+H employer, so the usual benchmarks don't apply. Unknown.", scores:{ qualification:3, enjoyment:1, school:1, location:6, mph:7, mission:10 }, scoreRationale:{ qualification:"No language fluency in the required list, no direct tenant-organizing/litigation-support experience, though housing system knowledge (HPD, rent stabilization, HCR) transfers from her FHSP background.", enjoyment:"Door-knocking, canvassing, lifting 20lbs, high caseload management — about as far from the back-end ops profile she's targeting as a role gets.", school:"Frequent evening and weekend tenant meetings are explicit and structural to the job, not occasional — direct conflict with MPH coursework.", location:"Hybrid with fieldwork concentrated in Brooklyn/Queens — plausible commute from Ridgewood depending on specific buildings/neighborhoods assigned.", mph:"Tenant displacement and housing rights work sits on the social determinants of health pipeline she's building toward, even though the role itself isn't back-end.", mission:"Anti-displacement and anti-gentrification organizing in her own future neighborhood. As mission-aligned as anything in the tracker." } },
{ id:1700000026000, title:"Housing Specialist", org:"Urban Pathways", location:"New York, NY — 9th Avenue, Manhattan — hybrid (4 days office/1 remote)", salary:"$27.39–$36.98/hr (~$57k–$77k)", postedDate:"", appliedDate:"", status:"Saved", url:"", closeDate:"2026-07-14", requirements:"Provide clinical case management and housing placement support for clients experiencing homelessness. Review and complete housing applications (HRA 2010e, LINC, HPD, etc). Manage and track housing packages submitted to DHS, OMH, HPD. Liaise with landlords/rental agents. Escort clients to housing interviews. Provide comprehensive case management: entitlements, employment, medical/mental health/substance use services. Crisis intervention, daily living skills support, conflict resolution. Conduct field work including home visits and outreach. Facilitate client groups and staff training.\n\nRequired: Bachelor's degree. Experience with NYC housing subsidies/programs required. Master's in social work preferred. Flexible schedule including weekends, holidays, evenings required. Lift up to 25lbs.", notes:"Posted ~3 days before pull, requisition ID 1397, no close date listed. ⏰ SELF-IMPOSED TARGET DATE — no actual close date known. Clinical case management role for individuals experiencing homelessness, serious mental illness, and substance use disorder. Mandatory weekend/holiday/evening schedule and direct caseload — same dealbreaker pattern as Tenant Organizer. Logged for completeness — low overall fit.", tuitionNote:"Nonprofit — posting mentions generic 'professional development opportunities' with no specific tuition dollar amount. Not a CUNY, NYC agency, or H+H employer. Unknown — would need to ask HR directly.", scores:{ qualification:6, enjoyment:2, school:1, location:7, mph:6, mission:8 }, scoreRationale:{ qualification:"Housing subsidy applications (HRA 2010e, LINC, HPD), client database tracking, landlord liaison, and placement reporting transfer from her FHSP background. Clinical case management and counseling components (crisis intervention, substance use/mental health support) are outside her direct experience.", enjoyment:"Clinical case management for individuals experiencing homelessness, serious mental illness, and substance use disorder. Home visits, client escorting, group facilitation, crisis intervention — direct service caseload work, the opposite of her target profile.", school:"Explicit requirement to work a flexible schedule including weekends, holidays, and evenings — same hard conflict pattern as other direct-service roles in the tracker.", location:"9th Ave Manhattan, hybrid 4 days office/1 remote — reasonable commute from Ridgewood.", mph:"Direct social determinants of health work — homelessness, housing-as-healthcare, behavioral health integration — genuinely relevant to public health practice even though the role is clinical/direct service rather than policy or analytics.", mission:"Serving people experiencing homelessness and mental illness toward permanent housing. Strongly values-aligned." } },
{ id:1700000027000, title:"Housing Equity Associate", org:"NYC Office of the Public Advocate", location:"New York, NY — 1 Centre St, Manhattan", salary:"$63,916 (flat)", postedDate:"2026-06-15", appliedDate:"", status:"Saved", url:"https://cityjobs.nyc.gov/jobs?q=Housing+Equity+Associate", closeDate:"2026-07-15", requirements:"Support the Deputy Public Advocate for Housing Equity on organizing strategies, policy research, stakeholder engagement, and rapid response. Build relationships with CBOs, advocacy groups, tenant associations. Represent the Office at community meetings, hearings, forums, including evenings and weekends. Staff the Public Advocate at public/community events. Monitor media, legislative developments, and agency actions on housing policy. Draft briefings, memoranda, issue summaries, fact sheets. Coordinate rapid response during housing emergencies.\n\nRequired: Bachelor's degree or equivalent experience in public policy, urban studies, political science, social sciences, or related field. No exam required (Unclassified Service-6).\nPreferred: Community engagement/organizing/advocacy experience, housing policy knowledge, NYC/NYS govt familiarity, bilingual, NYS driver's license, evening/weekend availability, five-borough travel.", notes:"Job ID 783358. Posted June 15, 2026. Closes July 15. PSLF eligible. ⚠️ Direct link couldn't be verified via search — linked to cityjobs search instead, search 'Housing Equity Associate' to find the live posting. Evening/weekend attendance named twice in posting as core duty, not occasional. Flat salary with no range — low for the policy-research scope implied. Strongest MPH alignment of the recent batch (housing policy + equity research) but the stakeholder/representation core function and schedule conflict pull it down significantly.", tuitionNote:"NYC agency (Public Advocate), Unclassified Service-6 title — likely DC37 or non-union exempt; benefit unclear. If DC37, capped at ~$1,500/year via the Municipal Employees Education Fund. Not individually confirmed.", scores:{ qualification:6, enjoyment:3, school:2, location:8, mph:8, mission:9 }, scoreRationale:{ qualification:"Policy research, briefing memos, fact sheets, and legislative tracking map to her writing/research skills, but the core function is stakeholder relations and organizing strategy support, not analysis — she has no direct policy advocacy or government relations experience.", enjoyment:"Representing the office at community meetings, hearings, and convenings 'including evenings and weekends' is named twice as a core duty. Staffing the Public Advocate at public events and five-borough travel. Relationship/representation work, not back-end research.", school:"Evening/weekend attendance explicit and repeated in the posting — direct structural conflict with MPH coursework.", location:"1 Centre St is downtown Manhattan, easy commute from Ridgewood.", mph:"Housing policy research, equity advocacy, and systemic inequity analysis sit squarely on the public health policy pipeline — probably the strongest MPH alignment in the recent batch of pulls.", mission:"Citywide housing equity advocacy at one of the most direct civic levels short of legislation itself." } },
{ id:1700000028000, title:"Housing Quality Enforcement Specialist — Division of Budget & Program Operations", org:"NYC Dept of Housing Preservation & Development (HPD)", location:"New York, NY — 100 Gold St, downtown Manhattan", salary:"$44,545–$51,227", postedDate:"2026-05-26", appliedDate:"", status:"Saved", url:"https://cityjobs.nyc.gov/jobs?q=Housing+Quality+Enforcement+Specialist", closeDate:"2026-07-25", requirements:"Case management functions to assist and expedite Section 8 vouchers. Performs research, maintains records, generates reports. Works with field staff to ensure apartment inspections are complete and data accurate. Coordinates with tenants for inspection access. Reviews and assigns field inspection routes, communicates with inspectors. Works with HPD Info and Section 8 Elite Programs. Answers/routes incoming calls. May assist drafting written responses to tenant/landlord/management agency inquiries. Coordinates mailings, files, electronic folders.\n\nRequired: HS diploma + 3 years community work experience (Community Associate title, Non-Competitive-5, entry-level). No exam required.\nPreferred: Strong communication and customer service skills, bilingual a plus, Section 8/rental subsidy experience a plus. May be required to work evenings and weekends.", notes:"Job ID 781987. Posted May 26, 2026. Closes July 25. PSLF eligible. ⚠️ Direct link couldn't be verified — this title reposts frequently and search only surfaces expired older versions; linked to HPD job search instead, search 'Housing Quality Enforcement Specialist' to find the live posting. Entry-Level title (Community Associate) — a step down in seniority from her current role, and salary ($44.5–51k) is well below her other saves. Coordination of inspections rather than fieldwork herself — more back-end than Tenant Organizer/Housing Specialist, but conditional evening/weekend language and phone-routing/customer-service duties pull it down. Same building (100 Gold St) as DTOR Project Manager (~75%), which is the stronger sibling role to prioritize.", tuitionNote:"NYC agency (HPD), Community Associate title — likely DC37-represented. DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:7, enjoyment:6, school:4, location:8, mph:6, mission:8 }, scoreRationale:{ qualification:"Records management, report generation, inspection route coordination, Elite Section 8 systems work, and tenant/landlord correspondence drafting map well to her ops background. Entry-level (Community Associate) title is a step down from her current seniority.", enjoyment:"She coordinates inspections rather than conducting them herself — scheduling tenant access, assigning inspector routes, maintaining records. More back-end than direct fieldwork roles, though phone-routing and customer service duties add a service layer.", school:"Conditional 'may be required to work evenings and weekends' language — present but less certain than in sibling DTOR Coordinator or Public Advocate postings.", location:"100 Gold St is HPD HQ, same building as the DTOR Project Manager and several other tracked roles — easy commute from Ridgewood.", mph:"Housing Quality Standards inspections are directly about habitability and health-relevant living conditions — genuine housing/health nexus relevance.", mission:"Direct support of HUD-subsidized housing quality and tenant access to safe housing. Strong values alignment." } },
{ id:1700000029000, title:"Assistant Coordinating Manager — Managed Care Finance", org:"NYC Health + Hospitals — Elmhurst Hospital Center", location:"Queens, NY — Elmhurst", salary:"$55,105–$63,371", postedDate:"", appliedDate:"", status:"Saved", url:"", closeDate:"2026-07-05", requirements:"Assists in planning, organizing, controlling, and coordinating administrative and office operations integrating business/management support systems with health care and patient support systems. Conducts studies on departmental operations, makes recommendations. Assists in budgetary planning, reviews operating costs, prepares department budgets. Serves as liaison between department divisions and Central Office. Evaluates office production, revises procedures. Establishes correspondence procedures. Formulates records retention/disposal procedures. Supervises office administration and recordkeeping. Assigns/schedules staff. May represent departmental administrator in external contacts with community organizations.\n\nRequired: Bachelor's in Business Admin, Community Health, Psychology, or related discipline + 1 year supervisory/administrative experience in business management or health care/patient systems administration. Non-Competitive title — no exam required.", notes:"Job ID 131550. Elmhurst Hospital Center, Managed Care Finance department. ⏰ SELF-IMPOSED TARGET DATE — no actual close date known for this posting. Fixed 8am-4pm, 35-hour week — no evening/weekend language, one of the cleanest schedules in the tracker. Strong qualification match to her FHSP background. Elmhurst is a cross-borough commute from Ridgewood without a direct line, the main drawback.", tuitionNote:"H+H — may qualify for managerial tuition reimbursement (up to $5,000/year) or 1199SEIU tuition assistance depending on title classification — verify eligibility for this specific Non-Competitive managerial title before counting on it.", scores:{ qualification:9, enjoyment:8, school:8, location:5, mph:5, mission:7 }, scoreRationale:{ qualification:"Office/admin systems coordination, budget planning and cost studies, records management, liaison between department and Central Office, and staff supervision map directly onto her FHSP program supervision work. Only 1 year of supervisory/admin experience required, well within her background.", enjoyment:"Almost entirely back-end systems and admin work — budget review, procedure manuals, records retention, liaison duties. The external community-contact duty is minor and occasional, not core to the role.", school:"Fixed 8am-4pm, 35-hour week, no evening/weekend language at all — one of the cleanest schedules in her tracker.", location:"Elmhurst is central Queens — a real cross-borough commute from Ridgewood without a direct train line, likely 45-60 minutes depending on route.", mph:"Managed Care Finance at a public hospital touches Medicaid/insurance operations with real public health system relevance, though more finance-administration than policy or community health.", mission:"Elmhurst is one of NYC's safety-net hospitals serving a heavily immigrant, working-class Queens population — genuine public mission alignment." } },
{ id:1700000030000, title:"Labor Relations Specialist", org:"NYC Health + Hospitals — Woodhull", location:"Brooklyn, NY — Woodhull", salary:"$108,000–$111,000", postedDate:"", appliedDate:"", status:"Saved", url:"", closeDate:"2026-07-12", requirements:"Participates in administration of Labor Relations programs. Prepares progress reports, analyzes union request impacts, prepares management rebuttals/strategies. Investigates and processes employee grievances, prepares recommendations. Serves as Hearing Officer for grievances; represents the Corporation at City Office of Labor Relations appeals and arbitration hearings. Maintains liaison with union representatives. Conducts labor relations research for program development.\n\nRequired: Bachelor's in Personnel, Public/Business Administration, Economics, Management, Law, or related discipline + 3 years progressively responsible experience in labor relations, including negotiation and administration of agreements. Managerial title.", notes:"Job ID 134598. Woodhull (Williamsburg/Bushwick) — genuinely close to Ridgewood, one of her shortest potential commutes. ⏰ SELF-IMPOSED TARGET DATE — no actual close date known. Fixed 9am-5pm schedule. Highest salary in the entire tracker ($108-111k) but real qualification gap: labor relations/grievance/arbitration experience is a distinct specialization she doesn't have on paper. Long-shot given the salary upside, but not a strong fit on paper.", tuitionNote:"H+H — confirmed Managerial classification, the same Group 11-equivalent track as the Onboarding Specialist and Labor Relations Associate. Likely eligible for the $5,000/year managerial tuition reimbursement program.", scores:{ qualification:3, enjoyment:5, school:7, location:7, mph:2, mission:5 }, scoreRationale:{ qualification:"Grievance investigation, hearing officer duties, arbitration representation, and union contract negotiation/administration require specialized labor relations experience she doesn't have — program supervision and vendor management don't substitute for negotiation/arbitration background. A genuine credential gap, not just a stretch.", enjoyment:"No caseload or fieldwork, standard day shift — but adversarial, quasi-legal work representing the Corporation at arbitration is meaningfully different in character from the back-end compliance/ops work she's targeted elsewhere.", school:"Standard 9am-5pm, no evening/weekend language — one of the better schedules in the batch.", location:"Woodhull is in Williamsburg/Bushwick — genuinely close to Ridgewood, likely one of her shortest commutes if it came through.", mph:"Labor relations has essentially no connection to the housing/public health pipeline she's building toward.", mission:"Supporting NYC's public hospital system has indirect value, but this specific role is internal HR/labor administration, not patient- or community-facing impact." } },
{ id:1700000031000, title:"Onboarding Specialist", org:"NYC Health + Hospitals — Harlem Hospital", location:"Manhattan, NY — Harlem", salary:"$60,000–$65,000", postedDate:"", appliedDate:"", status:"Saved", url:"", closeDate:"2026-07-10", requirements:"Ensures successful completion of onboarding activities; confirms new hires/rehires/transfers meet minimum quals. Prepares offer letters, onboarding packages via HCM system. Coordinates confidential onboarding activities including scheduling, Occupational Health appointments, new employee orientation enrollment. Serves as point of contact for new hires. Reviews onboarding documentation for completeness/accuracy/compliance. Communicates with hiring managers on progress. Enters candidate data into HCM system, updates trackers. Reviews Form I-9, assists with E-Verify audits. Conducts primary source verification of licensures/certifications. Captures digital fingerprints. May attend job fairs.\n\nRequired: Bachelor's in HR Management, Business Admin, Public Relations, Healthcare Admin, Psychology, Communications, or related discipline — no specific years of experience required under this option. OR Associate's + 2 years HR experience (1 year onboarding). Civil Service Classification: Managerial.", notes:"Job ID 133683. Harlem Hospital, HR Onboarding Services. ⏰ SELF-IMPOSED TARGET DATE — no actual close date known. Confirmed Managerial classification — genuine Group 11-equivalent track, makes the $5,000 tuition reimbursement program plausible. Fixed 9am-5pm, no evening/weekend language. Cleanest back-end profile in the H+H batch.", tuitionNote:"H+H — confirmed Managerial classification, the more reliable path to the $5,000/year managerial tuition reimbursement program (vs. the ambiguous Non-Competitive ACM titles).", scores:{ qualification:7, enjoyment:8, school:8, location:7, mph:2, mission:4 }, scoreRationale:{ qualification:"Process compliance, documentation review and tracking, HCM data entry, scheduling, background/credential verification map onto her admin background. Option 1 requires only a relevant Bachelor's with no specific years of experience — a notably low bar relative to her other saves.", enjoyment:"Almost entirely back-end: scheduling, document review, data entry, tracking metrics, I-9/background checks. No caseload, no crisis work, no public-facing service delivery — one of the cleanest back-end profiles in the entire tracker.", school:"Fixed 9am-5pm, no evening/weekend language at all.", location:"Harlem Hospital — same general commute as her other Harlem-based CUNY saves, ~35 min from Ridgewood on the A/C.", mph:"HR onboarding administration has no meaningful connection to public health or housing policy — the clearest tradeoff in this role.", mission:"Indirect support of H+H's broader mission by keeping the workforce staffed, but not community- or patient-facing." } },
{ id:1700000032000, title:"Labor Relations Associate", org:"NYC Health + Hospitals — Central Office", location:"Bronx, NY", salary:"$68,000 (flat)", postedDate:"2026-03-04", appliedDate:"", status:"Saved", url:"", closeDate:"2026-08-30", requirements:"Coordinates and implements labor relations functions. Assists in collective bargaining negotiations, arbitration, mediation by collecting/preparing supporting documentation. Participates in processing/investigating employee grievances, assists with resolution recommendations. Coordinates and tracks grievance procedural steps and deadlines; tracks Executive Order 75 union releases. Resolves/redirects employee relations inquiries. Serves as liaison for data needs including LR TEAAM application. Maintains labor relations records/databases. Prepares reports/presentations. Maintains liaison with union partners, Mayor's OLR and OCB. Assists scheduling/coordinating trainings, meetings, hearings. May manage Labor Relations calendar, facilitate invoice/billing, assist procurement.\n\nRequired: Bachelor's in HR Management, Labor Relations, Business Admin, Public Relations, Healthcare Admin, Law, Business Law, Political Science, Sociology, Industrial Labor Relations, or related discipline — no specific years of experience required under this option. Civil Service Classification: Managerial.", notes:"Job ID 132883. Posted March 4, 2026, closes August 30. Confirmed Managerial classification — genuine $5,000 tuition reimbursement candidate. Entry-level sibling to the Labor Relations Specialist (134598) — option 1 min quals require only a relevant Bachelor's, no labor relations experience, unlike the Specialist role's 3-year requirement. Coordination/documentation/tracking work rather than negotiation or arbitration representation — much closer to her actual background. Bronx commute from Ridgewood is the main drawback, likely 60+ minutes.", tuitionNote:"H+H — confirmed Managerial classification, strong candidate for the $5,000/year managerial tuition reimbursement program.", scores:{ qualification:8, enjoyment:7, school:8, location:4, mph:2, mission:5 }, scoreRationale:{ qualification:"No years of labor relations experience required under option 1 — just a relevant Bachelor's. The work itself (collecting/preparing grievance documentation, tracking deadlines and procedural steps, maintaining databases, liaising with OLR/OCB, scheduling hearings) is coordination and documentation support, not negotiation or arbitration representation — maps onto her FHSP compliance-tracking and stakeholder-liaison background well.", enjoyment:"Mostly back-end: data tracking, records maintenance, report prep, scheduling. Some liaison work with union partners and employees over grievances has a mild adversarial edge, but she's supporting the process rather than representing the Corporation at hearings herself.", school:"Fixed 9am-5pm, no evening/weekend language.", location:"Bronx is a genuine cross-borough haul from Ridgewood, likely 60+ minutes depending on facility and route — one of the longer commutes in her tracker.", mph:"Labor relations still has no real connection to housing/public health policy.", mission:"Same indirect H+H mission support as the other internal HR/labor roles." } },
{ id:1700000033000, title:"Confidential Executive Associate", org:"CUNY — University Human Resources, Central Office", location:"New York, NY — Manhattan", salary:"$98,995–$109,898", postedDate:"", appliedDate:"", status:"Saved", url:"https://hrsa.cunyfirst.cuny.edu/psc/erecruit/EMPLOYEE/HRMSCG/c/HRS_HRAM_FL.HRS_CG_SEARCH_FL.GBL?Page=HRS_APP_JBPST_FL&Action=U&FOCUS=Applicant&SiteId=1&JobOpeningId=32407&PostingSeq=1", closeDate:"2026-07-03", requirements:"Provides high-level administrative, operational, and strategic support to UHR Chief of Staff and Vice Chancellor's leadership team. Manages Vice Chancellor's calendar, coordinates meetings/events across Chancellery, union leadership, service partners. Oversees logistics for executive meetings/speeches/appearances: venues, vendor relationships/payments, agendas, IT coordination. Supports procurement: credit card reconciliation, invoices, compliance with CUNY financial policies. Manages communications on behalf of Vice Chancellor and UHR. Maintains office records/retention.\n\nRequired: Bachelor's + 6 years relevant experience. Higher Education Associate title, Exempt, excluded from union representation. Hybrid eligible.", notes:"Job ID 32407. ⏰ SELF-IMPOSED TARGET DATE — actual posting is open until filled, no real deadline. Highest CUNY salary in the tracker by far — nearly $30k above the next-best Hunter role. Explicitly hybrid eligible (not just 'may be eligible'). Full tuition waiver stacks on top. Real question mark: 6 years relevant experience required, the steepest bar among her CUNY saves — worth a gut-check on whether her FHSP/BC tenure clears it, but likely does given total years in nonprofit ops.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:7, enjoyment:7, school:7, location:8, mph:3, mission:5 }, scoreRationale:{ qualification:"Calendar/workflow management, event/meeting logistics, vendor management, procurement/credit card reconciliation, record retention map closely to the MOCS PM and DTOR PM work already scoring well. The 6-year experience minimum is meaningfully higher than most of her other saves — likely cleared given her total nonprofit ops tenure, but worth confirming before applying.", enjoyment:"Almost entirely back-end executive support: calendar, procurement, vendor relationships, records, communications. Coordinating with union leadership and the Chancellery on convenings is occasional, not core.", school:"Explicitly hybrid eligible — rare and valuable for evening MPH coursework, though noted as subject to change.", location:"Central Office, Manhattan — generally one of CUNY's most consistently good-commute locations from Ridgewood.", mph:"HR executive support has no real public health/housing pipeline relevance.", mission:"CUNY's broader public education mission is real, but supporting a Vice Chancellor's HR office is operationally distant from direct student or community impact." } },
{ id:1700000034000, title:"Administrative Specialist — Provost's Office", org:"CUNY — Graduate Center", location:"New York, NY — Manhattan", salary:"$79,598–$98,995 (rising to $82,384–$102,460 on 9/1/26)", postedDate:"", appliedDate:"", status:"Saved", url:"", closeDate:"2026-07-09", requirements:"Reports to Director for Academic Operations. Budgetary oversight of Centers and Institutes — tax-levy and non-tax-levy funds, endowment spending planning, drafting distribution letters/memoranda. Budget administration including credit card reconciliation, audits. Provides reports to Provost for data-driven decisions. Coordinates flights/hotels for external visitors, reviewers, guest speakers, faculty candidates. Manages inquiries from faculty/Business Office/programs. Manages office databases/files. Enters requisitions in CUNYBuy, handles GC Foundation payments/reimbursements, vendor communications. Ad hoc projects: research, event coordination, training sessions.\n\nRequired: Bachelor's + 4 years relevant experience. Higher Education Assistant title, Non-exempt. Hybrid (4 days office/1 remote).", notes:"Job ID 32312. Closes July 9 — URGENT. One of the highest scores in the entire tracker, tied with the DTOR Project Manager. Real hybrid schedule (4/1, not just 'eligible'). Duty list — budget oversight, credit card reconciliation, requisitions, vendor comms, reporting — is close to a one-to-one match with her FHSP work. Lower experience bar (4 years) than the Confidential Executive Associate role. Full tuition waiver applies.", tuitionNote:"CUNY — full tuition waiver for graduate study (covers MPH at CUNY SPH)", scores:{ qualification:9, enjoyment:8, school:7, location:8, mph:3, mission:5 }, scoreRationale:{ qualification:"Budget oversight across tax-levy/non-tax-levy funds, credit card reconciliation, audits, CUNYBuy requisitions, vendor communications, and data reports for leadership decisions are essentially the same skill cluster as her FHSP vendor/budget/compliance work, almost duty-for-duty. Only 4 years required, comfortably cleared.", enjoyment:"Pure back-end fiscal/admin operations: budgets, reconciliation, requisitions, reports, database management. The only outward-facing piece is coordinating travel/lodging for visiting faculty and reviewers — logistics, not service delivery.", school:"Explicit hybrid, 4 days office/1 remote — concrete and reliable, not just possible.", location:"Graduate Center is on 5th Ave near 34th St, Manhattan — one of the better Manhattan commutes from Ridgewood.", mph:"Academic budget administration has no real public health/housing tie, same tradeoff as her other strong CUNY admin roles.", mission:"CUNY's broader public education mission, but this role is operationally distant from direct student impact — similar to the Hunter Business Office role already flagged as a top pick." } },
{ id:1700000022000, title:"Executive Assistant to the Deputy Commissioner", org:"NYC Dept of Health & Mental Hygiene", location:"Queens, NY — Long Island City (42-09 28th St)", salary:"$68,209–$78,440", postedDate:"2026-05-02", appliedDate:"", status:"Withdrawn", url:"https://cityjobs.nyc.gov/job/executive-assistant-to-the-deputy-commissioner-in-queens-jid-43300", closeDate:"2026-06-28", requirements:"Manage all aspects of Deputy Commissioner's calendar (Family & Child Health division). Correspondence Tracking System liaison for Mayor's Management Report. Arrange transportation and travel logistics. Compile daily meeting binders. Coordinate document review/approvals in TEAMS. Respond to incoming correspondence. Assist with office management — supplies, mail, IT tickets. Handle travel reimbursements.\n\nRequired: Bachelor's + 3 years admin experience including 1 year supervisory/administrative capacity. ⚠️ Exam may be required (Competitive-1 title: Principal Administrative Associate).\nPreferred: Executive-level admin experience in government, complex calendar management, MS Office Suite, document tracking systems.", notes:"Job ID 778980. Posted May 2, 2026. ❌ Posting closed June 28 without application. PSLF eligible. DOHMH Deputy Commissioner of Family & Child Health. EXAM FLAG: Competitive-1 civil service title. Same building as HOPWA roles. ⚠️ Commute revised: Dec 2025 M/F service swap means the M no longer stops at Queens Plaza/Court Sq on weekdays — likely needs a transfer.", tuitionNote:"NYC agency (DOHMH), Principal Administrative Associate title (Competitive-1) — likely DC37-represented. DC37 Municipal Employees Education Fund caps graduate tuition reimbursement at ~$1,500/year. Not individually confirmed for this title.", scores:{ qualification:8, enjoyment:8, school:5, location:5, mph:6, mission:8 }, scoreRationale:{ qualification:"Calendar management, correspondence tracking, meeting coordination, document approval workflows, stakeholder liaison — maps directly to her admin and ops background. One year supervisory requirement met via current role.", enjoyment:"Genuinely back-end executive support — no caseload, no events beyond logistics. Supporting a Deputy Commissioner in a public health agency is close to ideal work structure.", school:"Up to 2 days WFH possible at DOHMH, helps offset commute uncertainty.", location:"42-09 28th St LIC — same building as HOPWA roles. Revised down from initial estimate — Dec 2025 M/F weekday swap means the M no longer serves Queens Plaza/Court Sq on weekdays, so this likely requires a transfer.", mph:"DOHMH Family & Child Health division — maternal health, child development, early intervention. Legitimately adjacent to public health practice and policy.", mission:"NYC DOHMH mission is population health for all New Yorkers — strong alignment even in a support role." } },
];

const STORAGE_KEY = "eloisa-jobs-v4";
const STATUSES = ["Saved","Applied","Interviewing","Offer","Ghosted","Rejected","Withdrawn"];

const STATUS_CONFIG = {
  Saved:        { color:"#4B9EFF", bg:"#1a2d4a", border:"#2a4a7a", label:"Saved",        emoji:"📌" },
  Applied:      { color:"#36C9A7", bg:"#0f2e27", border:"#1a5a47", label:"Applied",       emoji:"✉️" },
  Interviewing: { color:"#F9B233", bg:"#2d220a", border:"#5a4010", label:"Interviewing",  emoji:"💬" },
  Offer:        { color:"#FF6B9D", bg:"#2d0f1e", border:"#5a1a35", label:"Offer",         emoji:"🎉" },
  Ghosted:      { color:"#A78BFA", bg:"#1e1535", border:"#3a2560", label:"Ghosted",       emoji:"👻" },
  Rejected:     { color:"#FF7B72", bg:"#2d1010", border:"#5a1a1a", label:"Rejected",      emoji:"✕"  },
  Withdrawn:    { color:"#94A3B8", bg:"#1a2030", border:"#2a3050", label:"Withdrawn",     emoji:"↩️" },
};

const SORT_OPTIONS = [
  { key:"closeDate",   label:"Due Date",  icon:"⏰" },
  { key:"score",       label:"Score",     icon:"★" },
  { key:"salary",      label:"Salary",    icon:"$" },
  { key:"appliedDate", label:"Applied",   icon:"✉" },
  { key:"status",      label:"Status",    icon:"●" },
];

const STATUS_ORDER = {Saved:0,Applied:1,Interviewing:2,Offer:3,Ghosted:4,Rejected:5,Withdrawn:6};

const COMMUTE = {
  1700000001000: { label:"Upper East Side",    tier:"yellow" },
  1700000002000: { label:"Harlem",             tier:"green"  },
  1700000003000: { label:"Downtown Manhattan", tier:"green"  },
  1700000004000: { label:"Bronx",              tier:"red"    },
  1700000005000: { label:"Harlem",             tier:"green"  },
  1700000006000: { label:"Upper East Side",    tier:"yellow" },
  1700000007000: { label:"Harlem",             tier:"green"  },
  1700000008000: { label:"Downtown Manhattan", tier:"green"  },
  1700000010000: { label:"Downtown Manhattan", tier:"green"  },
  1700000011000: { label:"Downtown Manhattan", tier:"green"  },
  1700000012000: { label:"Washington Heights", tier:"yellow" },
  1700000013000: { label:"Brooklyn",           tier:"yellow" },
  1700000014000: { label:"Upper East Side",    tier:"yellow" },
  1700000015000: { label:"Upper East Side",    tier:"yellow" },
  1700000016000: { label:"Downtown Manhattan", tier:"green"  },
  1700000017000: { label:"Brooklyn",           tier:"yellow" },
  1700000018000: { label:"Long Island City",   tier:"yellow" },
  1700000019000: { label:"Long Island City",   tier:"yellow" },
  1700000020000: { label:"Downtown Manhattan", tier:"green"  },
  1700000021000: { label:"Downtown Manhattan", tier:"green"  },
  1700000022000: { label:"Long Island City",   tier:"yellow" },
  1700000023000: { label:"Long Island City",   tier:"yellow" },
  1700000024000: { label:"Downtown Manhattan", tier:"green"  },
  1700000027000: { label:"Downtown Manhattan", tier:"green"  },
  1700000028000: { label:"Downtown Manhattan", tier:"green"  },
  1700000029000: { label:"Elmhurst, Queens",   tier:"yellow" },
  1700000030000: { label:"Woodhull, Brooklyn", tier:"green"  },
  1700000031000: { label:"Harlem",             tier:"green"  },
  1700000032000: { label:"Bronx (Central)",    tier:"red"    },
  1700000033000: { label:"Manhattan",          tier:"green"  },
  1700000034000: { label:"Manhattan",          tier:"green"  },
};

const COMMUTE_STYLE = {
  green:  { color:"#36C9A7", bg:"rgba(54,201,167,0.1)",  border:"rgba(54,201,167,0.25)"  },
  yellow: { color:"#F9B233", bg:"rgba(249,178,51,0.1)",  border:"rgba(249,178,51,0.25)"  },
  red:    { color:"#FF7B72", bg:"rgba(255,123,114,0.1)", border:"rgba(255,123,114,0.25)" },
};

const DIMS = [
  {key:"qualification", label:"Qualification",  w:2.0, icon:"🎯"},
  {key:"enjoyment",     label:"Enjoyment",      w:2.0, icon:"✨"},
  {key:"school",        label:"School Compat",  w:1.5, icon:"🎓"},
  {key:"location",      label:"Location",       w:1.0, icon:"📍"},
  {key:"mph",           label:"MPH Alignment",  w:1.5, icon:"🏥"},
  {key:"mission",       label:"Mission Fit",    w:1.0, icon:"💙"},
];

const scoreColor = v => v==null?"#64748b":v>=7.5?"#36C9A7":v>=5?"#F9B233":"#FF7B72";
const scoreBg    = v => v==null?"#1e2535":v>=7.5?"#0f2e27":v>=5?"#2d220a":"#2d1010";
const salaryNum  = s => { if(!s)return null; const n=s.match(/\d[\d,]*/g); if(!n)return null; return n.map(x=>parseInt(x.replace(/,/g,""))).reduce((a,b)=>a+b,0)/n.length; };
const salaryColor= s => { const a=salaryNum(s); return !a?"#64748b":a>=80000?"#36C9A7":a>=60000?"#F9B233":"#FF7B72"; };
const salaryBadge= s => { const a=salaryNum(s); return !a?null:a>=80000?"strong":a>=60000?"good":"low"; };

const overall = scores => {
  if(!scores) return null;
  let t=0, w=0;
  DIMS.forEach(({key,w:wt})=>{ const v=scores[key]; if(v!=null){t+=(v/10)*wt; w+=wt;} });
  return w ? Math.round((t/w)*100) : null;
};
const overallColor = p => !p?"#64748b":p>=70?"#36C9A7":p>=45?"#F9B233":"#FF7B72";
const overallBg    = p => !p?"#1e2535":p>=70?"#0f2e27":p>=45?"#2d220a":"#2d1010";

const fmtDate   = d => { if(!d) return null; const[,m,day]=d.split("-"); return `${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+m-1]} ${+day}`; };
const daysUntil = d => { if(!d) return null; return Math.ceil((new Date(d)-new Date())/(1000*60*60*24)); };

const EMPTY = {id:null,title:"",org:"",location:"",salary:"",postedDate:"",appliedDate:"",closeDate:"",status:"Saved",url:"",requirements:"",notes:"",tuitionNote:"",scores:null,scoreRationale:null};

const MASTER_RESUME = `ELOISA MELENDEZ
Relocating to New York, NY | eloisam6@comcast.net | linkedin.com/in/eloisamelendez

EDUCATION
CUNY School of Public Health — MPH, beginning August 2026
Seattle University — B.S. Biology, Minor in Film Studies
The Grantsmanship Center — Certificate, Basic Grant Writing Skills

PROFESSIONAL EXPERIENCE

Brilliant Corners, Los Angeles, CA
Program Supervisor, Flexible Housing Subsidy Pool (FHSP) | Aug 2024 – Present
- Provide administrative support and office operations for a multi-site public program serving 300+ clients with complex medical/mental health needs; supervise a 5-person team and manage deadline-driven workflows
- Coordinate with LA County agencies, property managers, and intensive case management (ICMS) providers to stabilize housing placements and resolve crises
- Lead reconciliation of arrears, landlord disputes, and lease violations to preserve housing placements; route documentation for timely processing including invoice follow-up, vendor coordination, and purchasing logistics
- Maintain and standardize confidential records, files, trackers, and compliance documentation; improve audit readiness through structured records management
- Track data in Excel and program databases; generate reports and presentations for management to support decision-making and process improvement
- Initiated and led a cross-team process improvement effort to rebuild relocations workflows under new county prioritization guidelines
- Coach team on documentation quality, time management, and follow-through

United Way of King County, Seattle, WA / Remote
Program Partnerships Supervisor / Rental Assistance and Housing Stability Partnerships Coordinator | Mar 2023 – Jul 2024
- Managed program operations and partnerships across 6 CBOs and 45 case managers implementing emergency housing services
- Maintained partner files, confidential records, department archives, and data quality standards; conducted database research and systems queries to support management decisions
- Produced proposals, reports, and presentations for government stakeholders; coordinated reporting on program metrics including spend, geographic distribution, and equity outcomes
- Built training and technical assistance infrastructure (job aids, office hours, troubleshooting) to improve data quality, consistency, and partner documentation
- Overhauled the program-wide grievance process for tenant appeals, creating clear workflow steps, documentation standards, and timely resolution pathways
- Aligned service delivery with federal compliance and equity benchmarks in post-COVID relief programs

Team Lead, Housing Stability Specialists | Aug 2022 – Mar 2023
- Led a 10-person team implementing a $15M emergency rental assistance rollout; managed workflow triage, deadlines, and quality control
- Coordinated 15+ large-scale community intake events including supply procurement, vendor logistics, and outreach communications, supporting pipeline movement from outreach to application to documentation to eligibility to payment
- Prepared analytical tracking for volume, turnaround, and bottlenecks; used findings to adjust staffing and streamline intake

Rental Assistance / Housing Stability Specialist | Aug 2021 – Aug 2022
- Processed 20+ applications/week for eviction prevention assistance; single-handedly processed $8M+ in applications; named one of the top 3 most efficient caseworkers in King County
- Ensured accurate records and compliance with federal guidelines; navigated high-emotion tenant/landlord conflicts with clear written communication
- Supported backend data QA and partner user training during database transitions (GrantCare rollout)

AmeriCorps / HungerCorps VISTA, Seattle, WA
Food Access Site Supervisor (YMCA) & SFSP HungerCorps Associate (Seattle Parks) | 2020 – 2021
- Coordinated USDA meal site operations; maintained organized records and produced federal compliance reports
- Partnered with nonprofits and mutual aid groups to expand food access for families impacted by COVID-19

CORE SKILLS
Program operations & implementation | Project management | Stakeholder/partner liaison | Records management & compliance (federal/state/local) | Training & technical assistance | Process improvement | Analytical/statistical reporting | Budget administration & vendor coordination | Grant compliance | Written communications (memos, reports, presentations)
Tools: Excel (advanced), Word, PowerPoint, Outlook, Teams, Google Workspace
Data systems: CHAMP, HMIS, Salesforce, Apricot, GrantCare`;

// ── RESUME GENERATOR ─────────────────────────────────────────────────────────
const ResumeGenerator = ({job, onClose}) => {
  const [baseResume, setBaseResume] = useState(MASTER_RESUME);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [output, setOutput] = useState(null);
  const [copied, setCopied] = useState("");

  const [apiKey, setApiKey] = useState(() => localStorage.getItem("anthropic_key") || "");
  const [showKeyInput, setShowKeyInput] = useState(false);

  const saveKey = (k) => { localStorage.setItem("anthropic_key", k); setApiKey(k); setShowKeyInput(false); };

  const generate = async () => {
    setLoading(true); setError(null); setOutput(null);
    try {
      const prompt = `You are helping a real job applicant tailor her resume materials for a specific position. Below is her master resume (covering her full work history) and the job posting she's applying to.

JOB TITLE: ${job.title}
ORGANIZATION: ${job.org}
JOB REQUIREMENTS:
${job.requirements}

HER MASTER RESUME:
${baseResume}

Produce three things, clearly separated with the exact headers below:

### SUMMARY
A 2-3 sentence professional summary tailored to this specific role, written in her voice (first-person implied, no "I" statements — resume style).

### TAILORED BULLETS
Pick the 2-3 most relevant jobs from her history. For each, list 3-4 bullets rewritten/reordered to emphasize the skills and language that match this posting. Use her real accomplishments only — do not invent metrics or duties she hasn't done. Mirror keywords from the job posting where her actual experience genuinely supports it. Keep bullets concise, one line each where possible.

### COVER LETTER
A complete 3-paragraph cover letter, each paragraph 3-4 sentences: opening paragraph naming the role and a one-line hook connecting her background to the mission, middle paragraph with 2 concrete examples from her experience mapped to the posting's specific requirements, closing paragraph expressing interest and availability. Professional but warm tone, no generic filler phrases like "I am excited to apply."

Keep the entire response concise enough to fit comfortably in 1000 tokens total. Do not include any preamble before ### SUMMARY or any text after the cover letter ends.`;

      if(!apiKey){ setError("Please add your Anthropic API key first."); setLoading(false); return; }
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }]
        })
      });
      const raw = await response.text();
      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        console.error("Non-JSON response from API:", raw.slice(0,500));
        throw new Error(`Unexpected response (not JSON). Status ${response.status}: ${raw.slice(0,150)||"empty body"}`);
      }
      if(!response.ok){
        const msg = data?.error?.message || `Request failed (${response.status})`;
        throw new Error(msg);
      }
      if(!Array.isArray(data?.content)){
        console.error("Unexpected response shape:", data);
        throw new Error("Response didn't include the expected content array.");
      }
      const text = data.content.filter(b=>b?.type==="text").map(b=>b.text).join("\n");
      if(!text) throw new Error("Model returned no text content.");
      setOutput(text);
    } catch(e) {
      console.error("Resume generation error:", e);
      setError(e?.message || "Something went wrong generating your materials. Try again.");
    }
    setLoading(false);
  };

  const copySection = (label, text) => {
    navigator.clipboard?.writeText(text);
    setCopied(label);
    setTimeout(()=>setCopied(""), 1800);
  };

  const sections = output ? {
    summary: (output.split("### SUMMARY")[1]||"").split("### TAILORED BULLETS")[0]?.trim(),
    bullets: (output.split("### TAILORED BULLETS")[1]||"").split("### COVER LETTER")[0]?.trim(),
    cover: (output.split("### COVER LETTER")[1]||"").trim(),
  } : null;

  return (
    <div style={{position:"fixed",inset:0,zIndex:300,display:"flex",alignItems:"flex-end"}}
      onClick={e=>{ if(e.target===e.currentTarget) onClose(); }}>
      <div style={{position:"absolute",inset:0,background:"rgba(5,8,18,0.88)",backdropFilter:"blur(8px)"}} onClick={onClose}/>
      <div style={{position:"relative",background:"#0d1525",borderRadius:"24px 24px 0 0",width:"100%",maxHeight:"92vh",
        overflowY:"auto",WebkitOverflowScrolling:"touch",boxShadow:"0 -32px 80px rgba(0,0,0,0.9)",
        border:"1px solid rgba(255,255,255,0.06)",borderBottom:"none"}}>
        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 0"}}>
          <div style={{width:36,height:4,background:"rgba(255,255,255,0.15)",borderRadius:2}}/>
        </div>
        <div style={{padding:"14px 20px 0",display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
          <div>
            <h2 style={{margin:"0 0 3px",fontSize:18,color:"#f1f5f9",fontFamily:"'Fraunces',serif",fontWeight:700}}>✨ Resume Generator</h2>
            <p style={{margin:0,fontSize:12,color:"#64748b"}}>{job.title} · {job.org}</p>
          </div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",
            color:"#94a3b8",fontSize:18,cursor:"pointer",lineHeight:1,padding:"6px 10px",borderRadius:8,flexShrink:0}}>✕</button>
        </div>

        <div style={{padding:"0 20px 48px"}}>
          {!output && !loading && (
            <>
              <div style={{background:"#0a1020",borderRadius:12,padding:"12px 14px",marginBottom:14,border:"1px solid rgba(255,255,255,0.05)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                  <span style={{fontSize:11,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:700}}>API Key</span>
                  <button onClick={()=>setShowKeyInput(k=>!k)} style={{background:"none",border:"none",color:"#4B9EFF",fontSize:12,cursor:"pointer",fontWeight:600}}>
                    {apiKey ? "Change" : "Add Key"}
                  </button>
                </div>
                {showKeyInput || !apiKey ? (
                  <div style={{display:"flex",gap:8}}>
                    <input placeholder="sk-ant-..." defaultValue={apiKey}
                      onBlur={e=>saveKey(e.target.value.trim())}
                      style={{flex:1,background:"#070d1a",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,
                        color:"#cbd5e1",fontSize:11,fontFamily:"'DM Mono',monospace",padding:"8px 10px",outline:"none"}}/>
                  </div>
                ) : (
                  <p style={{margin:0,fontSize:11,color:"#36C9A7",lineHeight:1.6}}>✓ Key saved to this device</p>
                )}
              </div>
              <div style={{background:"#0a1020",borderRadius:12,padding:"12px 14px",marginBottom:14,border:"1px solid rgba(255,255,255,0.05)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                  <span style={{fontSize:11,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:700}}>Base Resume</span>
                  <button onClick={()=>setEditing(e=>!e)} style={{background:"none",border:"none",color:"#4B9EFF",fontSize:12,cursor:"pointer",fontWeight:600}}>
                    {editing ? "Done editing" : "Edit"}
                  </button>
                </div>
                {editing ? (
                  <textarea value={baseResume} onChange={e=>setBaseResume(e.target.value)}
                    style={{width:"100%",minHeight:240,background:"#070d1a",border:"1px solid rgba(255,255,255,0.1)",
                      borderRadius:8,color:"#cbd5e1",fontSize:11,fontFamily:"'DM Mono',monospace",padding:10,
                      boxSizing:"border-box",resize:"vertical",lineHeight:1.6}}/>
                ) : (
                  <p style={{margin:0,fontSize:11,color:"#64748b",lineHeight:1.6}}>
                    Using your saved master resume (all roles, full history). Tap Edit to adjust before generating.
                  </p>
                )}
              </div>

              <button onClick={generate} style={{
                background:"linear-gradient(135deg,#1a4a8a,#2a6aaa)",border:"1px solid rgba(75,158,255,0.4)",
                color:"#93c5fd",borderRadius:12,padding:"15px",cursor:"pointer",fontSize:14,fontWeight:700,
                width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                ✨ Generate Tailored Resume &amp; Cover Letter
              </button>
              <p style={{margin:"10px 0 0",fontSize:11,color:"#475569",textAlign:"center",lineHeight:1.5}}>
                Pulls this job's requirements automatically. Generates a tailored summary, reordered bullets, and a draft cover letter — review before sending, nothing is invented beyond your real history.
              </p>
            </>
          )}

          {loading && (
            <div style={{textAlign:"center",padding:"50px 0",color:"#64748b"}}>
              <div style={{fontSize:13,fontFamily:"'DM Mono',monospace"}}>Generating tailored materials…</div>
            </div>
          )}

          {error && (
            <div style={{background:"rgba(255,123,114,0.08)",border:"1px solid rgba(255,123,114,0.25)",borderRadius:10,
              padding:"12px 14px",color:"#FF7B72",fontSize:12,marginBottom:14}}>{error}</div>
          )}

          {sections && (
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {[
                {key:"summary", label:"Summary", icon:"📝", text:sections.summary},
                {key:"bullets", label:"Tailored Bullets", icon:"🎯", text:sections.bullets},
                {key:"cover", label:"Cover Letter", icon:"✉️", text:sections.cover},
              ].map(({key,label,icon,text})=>(
                <div key={key} style={{background:"#0a1020",borderRadius:12,padding:14,border:"1px solid rgba(255,255,255,0.05)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <span style={{fontSize:11,color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:700,display:"flex",alignItems:"center",gap:5}}>
                      <span>{icon}</span>{label}
                    </span>
                    <button onClick={()=>copySection(key,text)} style={{
                      background:copied===key?"rgba(54,201,167,0.15)":"rgba(75,158,255,0.1)",
                      border:`1px solid ${copied===key?"rgba(54,201,167,0.3)":"rgba(75,158,255,0.25)"}`,
                      color:copied===key?"#36C9A7":"#4B9EFF",borderRadius:8,padding:"4px 10px",
                      fontSize:11,fontWeight:600,cursor:"pointer"}}>
                      {copied===key ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                  <p style={{margin:0,fontSize:12,color:"#cbd5e1",lineHeight:1.7,whiteSpace:"pre-wrap"}}>{text}</p>
                </div>
              ))}
              <button onClick={()=>{setOutput(null);setError(null);}} style={{
                background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#94a3b8",
                borderRadius:10,padding:"12px",fontSize:12,fontWeight:600,cursor:"pointer"}}>
                ↺ Regenerate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── SCORE ARC ────────────────────────────────────────────────────────────────
const Arc = ({pct, size=54}) => {
  const c=overallColor(pct), bg=overallBg(pct), r=(size/2)-6, circ=2*Math.PI*r, dash=pct!=null?(pct/100)*circ:0;
  return (
    <div style={{position:"relative",width:size,height:size,flexShrink:0,background:bg,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <svg width={size} height={size} style={{position:"absolute",top:0,left:0}}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={4}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={c} strokeWidth={4}
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" strokeDashoffset={circ*0.25}
          style={{transition:"stroke-dasharray 0.7s cubic-bezier(0.34,1.56,0.64,1)"}}/>
      </svg>
      <span style={{fontSize:11,fontWeight:800,color:c,fontFamily:"'DM Mono',monospace",letterSpacing:"-0.5px",zIndex:1}}>{pct!=null?pct:"—"}</span>
    </div>
  );
};

// ── DIM BAR ──────────────────────────────────────────────────────────────────
const DimBar = ({label, icon, val, rationale}) => {
  const c=scoreColor(val), bg=scoreBg(val);
  return (
    <div style={{marginBottom:12,background:bg,borderRadius:10,padding:"10px 12px",border:`1px solid ${c}22`}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
        <span style={{fontSize:12,color:"#cbd5e1",fontWeight:600,display:"flex",alignItems:"center",gap:5}}>
          <span>{icon}</span>{label}
        </span>
        <span style={{fontSize:14,fontWeight:800,color:c,fontFamily:"'DM Mono',monospace"}}>{val??'—'}<span style={{fontSize:10,color:"#64748b",fontWeight:400}}>/10</span></span>
      </div>
      <div style={{height:6,background:"rgba(255,255,255,0.06)",borderRadius:3,overflow:"hidden",marginBottom:rationale?6:0}}>
        <div style={{width:`${val?(val/10)*100:0}%`,height:"100%",background:c,borderRadius:3,transition:"width 0.6s cubic-bezier(0.34,1.56,0.64,1)"}}/>
      </div>
      {rationale && <p style={{margin:0,fontSize:11,color:"#94a3b8",lineHeight:1.6}}>{rationale}</p>}
    </div>
  );
};

// ── SHEET ────────────────────────────────────────────────────────────────────
const Sheet = ({job, onEdit, onClose, onResume}) => {
  const [tab, setTab] = useState("overview");
  const ov = overall(job.scores);
  const sc = STATUS_CONFIG[job.status];
  const days = daysUntil(job.closeDate);

  return (
    <div style={{position:"fixed",inset:0,zIndex:100,display:"flex",flexDirection:"column",justifyContent:"flex-end"}}
      onClick={e=>{ if(e.target===e.currentTarget) onClose(); }}>
      <div style={{position:"absolute",inset:0,background:"rgba(5,8,18,0.8)",backdropFilter:"blur(8px)"}} onClick={onClose}/>
      <div style={{position:"relative",background:"#0d1525",borderRadius:"24px 24px 0 0",maxHeight:"90vh",display:"flex",flexDirection:"column",
        boxShadow:"0 -32px 80px rgba(0,0,0,0.8)",border:"1px solid rgba(255,255,255,0.06)",borderBottom:"none"}}>

        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 0"}}>
          <div style={{width:36,height:4,background:"rgba(255,255,255,0.15)",borderRadius:2}}/>
        </div>

        <div style={{padding:"14px 20px 0",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{flex:1,minWidth:0,paddingRight:12}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:7,flexWrap:"wrap"}}>
              <span style={{fontSize:11,color:sc.color,fontWeight:700,letterSpacing:"0.05em",background:sc.bg,
                border:`1px solid ${sc.border}`,borderRadius:20,padding:"3px 10px",display:"flex",alignItems:"center",gap:4}}>
                <span>{sc.emoji}</span>{job.status.toUpperCase()}
              </span>
              {days!=null&&days>=0&&(
                <span style={{fontSize:10,fontWeight:700,color:days<=3?"#FF7B72":days<=7?"#F9B233":"#94a3b8",
                  background:days<=3?"rgba(255,123,114,0.12)":days<=7?"rgba(249,178,51,0.12)":"rgba(148,163,184,0.08)",
                  border:`1px solid ${days<=3?"rgba(255,123,114,0.3)":days<=7?"rgba(249,178,51,0.3)":"rgba(148,163,184,0.15)"}`,
                  borderRadius:20,padding:"3px 10px"}}>
                  {days===0?"DUE TODAY":days===1?"1 DAY LEFT":`${days} DAYS`}
                </span>
              )}
            </div>
            <h2 style={{margin:"0 0 4px",fontSize:20,color:"#f1f5f9",fontFamily:"'Fraunces',serif",fontWeight:700,lineHeight:1.2}}>{job.title}</h2>
            <p style={{margin:0,fontSize:13,color:"#64748b",fontWeight:500}}>{job.org}</p>
          </div>
          <div style={{display:"flex",gap:8,flexShrink:0}}>
            <button onClick={()=>onResume(job)} style={{background:"linear-gradient(135deg,#1a4a8a,#2a6aaa)",border:"1px solid rgba(75,158,255,0.4)",color:"#93c5fd",
              borderRadius:10,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,whiteSpace:"nowrap"}}>✨ Resume</button>
            <button onClick={()=>onEdit(job)} style={{background:"#1a2d4a",border:"1px solid #2a4a7a",color:"#4B9EFF",
              borderRadius:10,padding:"8px 14px",cursor:"pointer",fontSize:12,fontWeight:700,flexShrink:0}}>Edit</button>
          </div>
        </div>

        <div style={{display:"flex",padding:"14px 20px 0",gap:4,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          {["overview","scores","notes"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{background:tab===t?"rgba(75,158,255,0.12)":"transparent",
              border:`1px solid ${tab===t?"rgba(75,158,255,0.3)":"transparent"}`,
              color:tab===t?"#4B9EFF":"#64748b",padding:"7px 14px 8px",cursor:"pointer",fontSize:13,
              fontWeight:tab===t?700:500,borderRadius:"8px 8px 0 0",transition:"all 0.15s"}}>
              {t[0].toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>

        <div style={{overflowY:"auto",padding:"16px 20px 40px",flex:1,WebkitOverflowScrolling:"touch"}}>

          {tab==="overview"&&<div>
            <div style={{display:"flex",gap:10,marginBottom:12}}>
              {ov!=null&&(
                <div style={{flex:1,background:overallBg(ov),borderRadius:14,padding:"14px 16px",
                  border:`1px solid ${overallColor(ov)}33`,display:"flex",alignItems:"center",gap:12}}>
                  <Arc pct={ov} size={54}/>
                  <div>
                    <div style={{fontSize:10,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:700,marginBottom:2}}>Overall</div>
                    <div style={{fontSize:24,fontWeight:800,color:overallColor(ov),fontFamily:"'DM Mono',monospace",letterSpacing:"-1px"}}>{ov}%</div>
                  </div>
                </div>
              )}
              {job.salary&&(
                <div style={{flex:1,background:"#0d1a2d",borderRadius:14,padding:"14px 16px",border:"1px solid rgba(255,255,255,0.06)"}}>
                  <div style={{fontSize:10,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:700,marginBottom:4}}>Salary</div>
                  <div style={{fontSize:15,fontWeight:800,color:salaryColor(job.salary),fontFamily:"'DM Mono',monospace"}}>{job.salary}</div>
                  {salaryBadge(job.salary)&&(
                    <div style={{fontSize:10,color:salaryColor(job.salary),marginTop:3,fontWeight:600}}>
                      {salaryBadge(job.salary)==="strong"?"⚡ Top range":salaryBadge(job.salary)==="good"?"✓ Good range":"⚠ Below target"}
                    </div>
                  )}
                </div>
              )}
            </div>

            {job.tuitionNote&&(
              <div style={{background:"#1a1500",border:"1px solid rgba(249,178,51,0.25)",borderRadius:12,
                padding:"12px 14px",marginBottom:12,display:"flex",alignItems:"flex-start",gap:10}}>
                <span style={{fontSize:20,lineHeight:1,flexShrink:0}}>🎓</span>
                <span style={{fontSize:12,color:"#F9B233",lineHeight:1.6,fontWeight:500}}>{job.tuitionNote}</span>
              </div>
            )}

            <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:14}}>
              {job.location&&(
                <div style={{background:"#131c2e",borderRadius:20,padding:"6px 12px",fontSize:12,color:"#94a3b8",
                  border:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:5}}>
                  <span>📍</span>{job.location}
                </div>
              )}
              {fmtDate(job.closeDate)&&(
                <div style={{background:"#131c2e",borderRadius:20,padding:"6px 12px",fontSize:12,
                  color:days!=null&&days<=7?"#F9B233":"#94a3b8",border:`1px solid ${days!=null&&days<=7?"rgba(249,178,51,0.25)":"rgba(255,255,255,0.07)"}`,
                  display:"flex",alignItems:"center",gap:5}}>
                  <span>⏰</span>Closes {fmtDate(job.closeDate)}
                </div>
              )}
              {fmtDate(job.appliedDate)&&(
                <div style={{background:"#131c2e",borderRadius:20,padding:"6px 12px",fontSize:12,color:"#36C9A7",
                  border:"1px solid rgba(54,201,167,0.2)",display:"flex",alignItems:"center",gap:5}}>
                  <span>✉️</span>Applied {fmtDate(job.appliedDate)}
                </div>
              )}
            </div>

            {job.url&&(
              <a href={job.url} target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",
                gap:6,background:"#131c2e",border:"1px solid rgba(75,158,255,0.2)",color:"#4B9EFF",borderRadius:12,
                padding:"12px",fontSize:13,fontWeight:600,textDecoration:"none",marginBottom:14}}>
                View Job Posting <span style={{fontSize:16}}>→</span>
              </a>
            )}

            {job.requirements&&(
              <div style={{background:"#0a1020",borderRadius:12,padding:"14px",border:"1px solid rgba(255,255,255,0.05)"}}>
                <div style={{fontSize:10,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:700,marginBottom:8}}>Requirements</div>
                <p style={{margin:0,fontSize:12,color:"#94a3b8",lineHeight:1.8,whiteSpace:"pre-wrap"}}>{job.requirements}</p>
              </div>
            )}
          </div>}

          {tab==="scores"&&<div>
            {job.scores
              ? DIMS.map(({key,label,icon})=><DimBar key={key} label={label} icon={icon} val={job.scores[key]} rationale={job.scoreRationale?.[key]}/>)
              : <p style={{color:"#64748b",fontSize:13,textAlign:"center",marginTop:30}}>No scores yet.</p>}
          </div>}

          {tab==="notes"&&<div>
            {job.notes
              ? <div style={{background:"#0a1020",borderRadius:12,padding:"14px",border:"1px solid rgba(255,255,255,0.05)"}}>
                  <p style={{margin:0,fontSize:13,color:"#94a3b8",lineHeight:1.9,whiteSpace:"pre-wrap"}}>{job.notes}</p>
                </div>
              : <p style={{color:"#64748b",fontSize:13,textAlign:"center",marginTop:30}}>No notes. Tap Edit to add some.</p>}
          </div>}
        </div>
      </div>
    </div>
  );
};

// ── EDIT MODAL ───────────────────────────────────────────────────────────────
const EditModal = ({job, onClose, onSave, onDelete}) => {
  const [form, setForm] = useState(job);
  const isNew = !job.id;
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  const inp = {background:"#0a1020",border:"1px solid rgba(255,255,255,0.1)",borderRadius:10,color:"#e2e8f0",
    padding:"11px 14px",fontSize:13,width:"100%",boxSizing:"border-box",fontFamily:"inherit",outline:"none"};
  const lbl = {fontSize:11,color:"#94a3b8",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:6,display:"block",fontWeight:700};

  return (
    <div style={{position:"fixed",inset:0,zIndex:200,display:"flex",alignItems:"flex-end"}}
      onClick={e=>{ if(e.target===e.currentTarget) onClose(); }}>
      <div style={{position:"absolute",inset:0,background:"rgba(5,8,18,0.85)",backdropFilter:"blur(8px)"}} onClick={onClose}/>
      <div style={{position:"relative",background:"#0d1525",borderRadius:"24px 24px 0 0",width:"100%",maxHeight:"92vh",
        overflowY:"auto",WebkitOverflowScrolling:"touch",boxShadow:"0 -32px 80px rgba(0,0,0,0.9)",
        border:"1px solid rgba(255,255,255,0.06)",borderBottom:"none"}}>
        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 0"}}>
          <div style={{width:36,height:4,background:"rgba(255,255,255,0.15)",borderRadius:2}}/>
        </div>
        <div style={{padding:"12px 20px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
          <h2 style={{margin:0,fontSize:18,color:"#f1f5f9",fontFamily:"'Fraunces',serif",fontWeight:700}}>{isNew?"New Position":"Edit Position"}</h2>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",
            color:"#94a3b8",fontSize:18,cursor:"pointer",lineHeight:1,padding:"6px 10px",borderRadius:8}}>✕</button>
        </div>
        <div style={{padding:"0 20px 48px",display:"flex",flexDirection:"column",gap:14}}>
          <div><label style={lbl}>Job Title *</label><input style={inp} value={form.title} onChange={e=>set("title",e.target.value)}/></div>
          <div><label style={lbl}>Organization *</label><input style={inp} value={form.org} onChange={e=>set("org",e.target.value)}/></div>
          <div>
            <label style={lbl}>Status</label>
            <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
              {STATUSES.map(s=>{
                const sc=STATUS_CONFIG[s];
                return <button key={s} onClick={()=>set("status",s)} style={{
                  background:form.status===s?sc.bg:"rgba(255,255,255,0.04)",
                  border:`1px solid ${form.status===s?sc.border:"rgba(255,255,255,0.08)"}`,
                  color:form.status===s?sc.color:"#64748b",borderRadius:20,padding:"7px 13px",
                  cursor:"pointer",fontSize:12,fontWeight:form.status===s?700:500,
                  display:"flex",alignItems:"center",gap:4}}>
                  <span>{sc.emoji}</span>{s}
                </button>;
              })}
            </div>
          </div>
          <div><label style={lbl}>Location</label><input style={inp} value={form.location} onChange={e=>set("location",e.target.value)}/></div>
          <div><label style={lbl}>Salary</label><input style={inp} value={form.salary} onChange={e=>set("salary",e.target.value)}/></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <div><label style={lbl}>Date Posted</label><input style={inp} type="date" value={form.postedDate} onChange={e=>set("postedDate",e.target.value)}/></div>
            <div><label style={lbl}>Date Applied</label><input style={inp} type="date" value={form.appliedDate} onChange={e=>set("appliedDate",e.target.value)}/></div>
          </div>
          <div><label style={lbl}>Closing Date</label><input style={inp} type="date" value={form.closeDate||""} onChange={e=>set("closeDate",e.target.value)}/></div>
          <div><label style={lbl}>Job URL</label><input style={inp} value={form.url} onChange={e=>set("url",e.target.value)}/></div>
          <div><label style={lbl}>Requirements / JD</label><textarea style={{...inp,minHeight:80,resize:"vertical"}} value={form.requirements} onChange={e=>set("requirements",e.target.value)}/></div>
          <div><label style={lbl}>Tuition Note</label><input style={inp} value={form.tuitionNote||""} onChange={e=>set("tuitionNote",e.target.value)}/></div>
          <div><label style={lbl}>Notes</label><textarea style={{...inp,minHeight:80,resize:"vertical"}} value={form.notes} onChange={e=>set("notes",e.target.value)}/></div>
          {form.scores&&<>
            <div style={{fontSize:11,color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:700,paddingTop:4}}>Score Overrides</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {DIMS.map(({key,label,icon})=>(
                <div key={key}><label style={lbl}>{icon} {label}</label>
                <input type="number" min={1} max={10} style={inp} value={form.scores[key]??""} onChange={e=>setForm(f=>({...f,scores:{...f.scores,[key]:e.target.value===""?null:+e.target.value}}))}/></div>
              ))}
            </div>
          </>}
          <button onClick={()=>onSave(form)} disabled={!form.title||!form.org} style={{
            background:form.title&&form.org?"linear-gradient(135deg,#1a4a8a,#2a6aaa)":"rgba(255,255,255,0.04)",
            border:`1px solid ${form.title&&form.org?"rgba(75,158,255,0.4)":"rgba(255,255,255,0.08)"}`,
            color:form.title&&form.org?"#93c5fd":"#374151",borderRadius:12,padding:"15px",
            cursor:form.title&&form.org?"pointer":"default",fontSize:14,fontWeight:700,width:"100%",marginTop:4}}>
            {isNew?"Add Position":"Save Changes"}
          </button>
          {!isNew&&<button onClick={()=>{ if(window.confirm("Delete this job?")) onDelete(form.id); }} style={{
            background:"rgba(255,123,114,0.07)",border:"1px solid rgba(255,123,114,0.2)",color:"#FF7B72",
            borderRadius:12,padding:"13px",cursor:"pointer",fontSize:13,fontWeight:600,width:"100%"}}>
            Delete Position
          </button>}
        </div>
      </div>
    </div>
  );
};

// ── CARD ─────────────────────────────────────────────────────────────────────
const Card = ({job, onTap}) => {
  const ov = overall(job.scores);
  const sc = STATUS_CONFIG[job.status];
  const days = daysUntil(job.closeDate);
  const urgent   = days!=null&&days<=7 &&days>=0&&(job.status==="Saved"||job.status==="Applied");
  const critical = days!=null&&days<=3 &&days>=0&&(job.status==="Saved"||job.status==="Applied");

  return (
    <div onClick={onTap} style={{
      background:"#0d1525",borderRadius:16,padding:"0",
      border:`1px solid ${critical?"rgba(255,123,114,0.4)":urgent?"rgba(249,178,51,0.3)":sc.border}`,
      cursor:"pointer",WebkitTapHighlightColor:"transparent",overflow:"hidden",
      boxShadow:critical?"0 0 20px rgba(255,123,114,0.1)":urgent?"0 0 20px rgba(249,178,51,0.08)":"none",
      transition:"transform 0.15s,box-shadow 0.15s"}}
      onTouchStart={e=>{ e.currentTarget.style.transform="scale(0.98)"; e.currentTarget.style.opacity="0.9"; }}
      onTouchEnd={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.opacity="1"; }}>

      <div style={{height:3,background:sc.color,opacity:0.7}}/>

      <div style={{padding:"14px 16px"}}>
        <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:8,flexWrap:"wrap"}}>
          <span style={{fontSize:11,color:sc.color,fontWeight:700,letterSpacing:"0.05em",
            background:sc.bg,border:`1px solid ${sc.border}`,borderRadius:20,padding:"2px 9px",
            display:"flex",alignItems:"center",gap:4}}>
            <span style={{fontSize:10}}>{sc.emoji}</span>{job.status.toUpperCase()}
          </span>
          {urgent&&(
            <span style={{fontSize:10,fontWeight:700,
              color:critical?"#FF7B72":"#F9B233",
              background:critical?"rgba(255,123,114,0.12)":"rgba(249,178,51,0.12)",
              border:`1px solid ${critical?"rgba(255,123,114,0.3)":"rgba(249,178,51,0.3)"}`,
              borderRadius:20,padding:"2px 9px",animation:critical?"pulse 1.5s infinite":"none"}}>
              {days===0?"TODAY":days===1?"1 DAY":`${days} DAYS`}
            </span>
          )}
          {job.tuitionNote&&<span style={{fontSize:11,background:"rgba(249,178,51,0.1)",borderRadius:20,padding:"2px 8px",border:"1px solid rgba(249,178,51,0.2)"}}>🎓</span>}
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,marginBottom:10}}>
          <div style={{flex:1,minWidth:0}}>
            <h3 style={{margin:"0 0 3px",fontSize:16,fontWeight:700,color:"#e2e8f0",lineHeight:1.3,fontFamily:"'Fraunces',serif",
              overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>{job.title}</h3>
            <p style={{margin:0,fontSize:12,color:"#64748b",fontWeight:500}}>{job.org}</p>
          </div>
          {ov!=null&&<Arc pct={ov} size={50}/>}
        </div>

        <div style={{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",paddingTop:8,borderTop:"1px solid rgba(255,255,255,0.05)"}}>
          {job.salary&&(
            <span style={{fontSize:13,fontWeight:700,color:salaryColor(job.salary),fontFamily:"'DM Mono',monospace"}}>{job.salary}</span>
          )}
          {job.closeDate&&(job.status==="Saved"||job.status==="Applied")&&(
            <span style={{fontSize:11,color:urgent?critical?"#FF7B72":"#F9B233":"#64748b",background:"rgba(255,255,255,0.04)",
              borderRadius:8,padding:"3px 8px",fontWeight:500}}>⏰ {fmtDate(job.closeDate)}</span>
          )}
          {(()=>{ const c=COMMUTE[job.id]; if(!c) return null; const cs=COMMUTE_STYLE[c.tier]; return (
            <span style={{fontSize:11,fontWeight:600,color:cs.color,background:cs.bg,
              border:`1px solid ${cs.border}`,borderRadius:8,padding:"3px 8px",
              display:"flex",alignItems:"center",gap:3}}>
              <span style={{fontSize:9}}>●</span>{c.label}
            </span>
          ); })()}
          {fmtDate(job.appliedDate)&&(
            <span style={{fontSize:11,color:"#36C9A7",background:"rgba(54,201,167,0.08)",borderRadius:8,padding:"3px 8px",
              marginLeft:"auto",fontWeight:500,border:"1px solid rgba(54,201,167,0.15)"}}>✉ {fmtDate(job.appliedDate)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [jobs, setJobs]           = useState([]);
  const [loading, setLoading]     = useState(true);
  const [sheet, setSheet]         = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [resumeModal, setResumeModal] = useState(null);
  const [filter, setFilter]       = useState("All");
  const [search, setSearch]       = useState("");
  const [sortKey, setSortKey]     = useState("closeDate");
  const [sortDir, setSortDir]     = useState("asc");

  useEffect(()=>{
    (async()=>{
      try {
        let stored=[];
        try{ const r=localStorage.getItem(STORAGE_KEY); if(r) stored=JSON.parse(r); }catch{}
        if(CLAUDE_JOB_QUEUE.length>0){
          const ids    = new Set(stored.map(j=>j.id));
          const fresh  = CLAUDE_JOB_QUEUE.filter(j=>!ids.has(j.id));
          const updated= stored.map(j=>{ const u=CLAUDE_JOB_QUEUE.find(q=>q.id===j.id); return u?{...j,...u}:j; });
          const merged = [...fresh,...updated];
          setJobs(merged);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        } else { setJobs(stored); }
      } catch(e){ console.error(e); }
      setLoading(false);
    })();
  },[]);

  const persist = async u => { try{ localStorage.setItem(STORAGE_KEY,JSON.stringify(u)); }catch{} };

  const handleSave = async form => {
    let u;
    if(!form.id){ u=[{...form,id:Date.now()},...jobs]; }
    else{ u=jobs.map(j=>j.id===form.id?form:j); if(sheet?.id===form.id) setSheet(form); }
    setJobs(u); await persist(u); setEditModal(null);
  };

  const handleDelete = async id => {
    const u=jobs.filter(j=>j.id!==id);
    setJobs(u); await persist(u); setEditModal(null); setSheet(null);
  };

  const handleSort = key => {
    if(sortKey===key) setSortDir(d=>d==="asc"?"desc":"asc");
    else{ setSortKey(key); setSortDir("asc"); }
  };

  const sortJobs = list => [...list].sort((a,b)=>{
    let av, bv;
    if(sortKey==="score")       { av=overall(a.scores)??-1;                                  bv=overall(b.scores)??-1; }
    else if(sortKey==="salary") { av=salaryNum(a.salary)??-1;                                bv=salaryNum(b.salary)??-1; }
    else if(sortKey==="status") { av=STATUS_ORDER[a.status]??99;                             bv=STATUS_ORDER[b.status]??99; }
    else if(sortKey==="closeDate")   { av=a.closeDate?new Date(a.closeDate).getTime():Infinity;   bv=b.closeDate?new Date(b.closeDate).getTime():Infinity; }
    else if(sortKey==="appliedDate") { av=a.appliedDate?new Date(a.appliedDate).getTime():Infinity; bv=b.appliedDate?new Date(b.appliedDate).getTime():Infinity; }
    else { av=0; bv=0; }
    return sortDir==="asc" ? av-bv : bv-av;
  });

  const counts      = STATUSES.reduce((a,s)=>({...a,[s]:jobs.filter(j=>j.status===s).length}),{});
  const activeCount = jobs.filter(j=>["Saved","Applied","Interviewing"].includes(j.status)).length;

  const filtered = sortJobs(jobs.filter(j=>{
    const ms = filter==="All" || j.status===filter;
    const q  = search.toLowerCase();
    return ms && (!q || [j.title,j.org,j.location].some(f=>(f||"").toLowerCase().includes(q)));
  }));

  return (
    <div style={{minHeight:"100vh",background:"#070d1a",fontFamily:"'DM Sans','Helvetica Neue',sans-serif",color:"#e2e8f0",maxWidth:600,margin:"0 auto",paddingBottom:48}}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700;1,800&family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;1,9..144,600&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@500;600&display=swap" rel="stylesheet"/>
      <style>{`*{box-sizing:border-box;-webkit-font-smoothing:antialiased;} body{margin:0;background:#070d1a;} ::-webkit-scrollbar{display:none;} input[type=date]::-webkit-calendar-picker-indicator{filter:invert(0.5);} @keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.6;}}`}</style>

      {/* ── HEADER ── */}
      <div style={{padding:"28px 20px 16px",position:"sticky",top:0,background:"#070d1a",zIndex:40,
        borderBottom:"1px solid rgba(255,255,255,0.06)"}}>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
          <div>
            <h1 style={{margin:0,fontSize:34,fontFamily:"'Playfair Display',serif",fontWeight:700,
              fontStyle:"italic",color:"#FF7B72",letterSpacing:"-0.5px",lineHeight:1,
              textShadow:"0 0 40px rgba(255,123,114,0.25)"}}>
              Job Tracker
            </h1>
            <p style={{margin:"4px 0 0",fontSize:11,color:"#475569",fontWeight:500,fontFamily:"'DM Mono',monospace"}}>
              {jobs.length} tracked · <span style={{color:"#4B9EFF"}}>{activeCount} active</span>
            </p>
          </div>
          <button onClick={()=>setEditModal({...EMPTY})} style={{
            background:"linear-gradient(135deg,#1a4a8a,#2a6aaa)",
            border:"1px solid rgba(75,158,255,0.3)",color:"#93c5fd",borderRadius:12,
            padding:"10px 18px",cursor:"pointer",fontSize:13,fontWeight:700,
            display:"flex",alignItems:"center",gap:6,boxShadow:"0 4px 16px rgba(75,158,255,0.15)"}}>
            <span style={{fontSize:16,lineHeight:1}}>＋</span> Add
          </button>
        </div>

        <div style={{display:"flex",gap:6,overflowX:"auto",scrollbarWidth:"none",WebkitOverflowScrolling:"touch",paddingBottom:2}}>
          {["All",...STATUSES].map(s=>{
            const sc  = STATUS_CONFIG[s];
            const cnt = s==="All" ? jobs.length : (counts[s]||0);
            const isActive = filter===s;
            return (
              <button key={s} onClick={()=>setFilter(s)} style={{
                background:isActive?(s==="All"?"rgba(75,158,255,0.12)":sc.bg):"rgba(255,255,255,0.04)",
                border:`1px solid ${isActive?(s==="All"?"rgba(75,158,255,0.35)":sc.border):"rgba(255,255,255,0.08)"}`,
                color:isActive?(s==="All"?"#4B9EFF":sc.color):"#94a3b8",
                borderRadius:20,padding:"7px 13px",cursor:"pointer",fontSize:12,
                fontWeight:isActive?700:500,whiteSpace:"nowrap",flexShrink:0,
                display:"flex",alignItems:"center",gap:5,transition:"all 0.15s"}}>
                {s!=="All"&&<span style={{fontSize:11}}>{sc.emoji}</span>}
                {s}{cnt>0&&<span style={{fontSize:11,opacity:isActive?0.8:0.5,fontFamily:"'DM Mono',monospace"}}>{cnt}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SORT + SEARCH ── */}
      <div style={{padding:"12px 20px 4px"}}>
        <div style={{display:"flex",gap:5,overflowX:"auto",scrollbarWidth:"none",WebkitOverflowScrolling:"touch",marginBottom:10,alignItems:"center"}}>
          <span style={{fontSize:10,color:"#475569",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",flexShrink:0,fontFamily:"'DM Mono',monospace"}}>Sort</span>
          {SORT_OPTIONS.map(({key,label,icon})=>{
            const active = sortKey===key;
            return (
              <button key={key} onClick={()=>handleSort(key)} style={{
                background:active?"rgba(75,158,255,0.12)":"rgba(255,255,255,0.04)",
                border:`1px solid ${active?"rgba(75,158,255,0.3)":"rgba(255,255,255,0.08)"}`,
                color:active?"#4B9EFF":"#94a3b8",
                borderRadius:20,padding:"6px 12px",cursor:"pointer",fontSize:12,
                fontWeight:active?700:500,whiteSpace:"nowrap",flexShrink:0,
                display:"flex",alignItems:"center",gap:4,transition:"all 0.15s"}}>
                <span style={{fontSize:11}}>{icon}</span>{label}
                {active&&<span style={{fontSize:10,fontFamily:"'DM Mono',monospace"}}>{sortDir==="asc"?"↑":"↓"}</span>}
              </button>
            );
          })}
        </div>

        <div style={{position:"relative"}}>
          <span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:"#475569",fontSize:14,pointerEvents:"none"}}>🔍</span>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search positions, orgs, locations..."
            style={{background:"#0d1525",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,
              color:"#e2e8f0",padding:"11px 14px 11px 40px",fontSize:13,width:"100%",outline:"none",fontFamily:"inherit"}}/>
        </div>
      </div>

      {/* ── CARDS ── */}
      <div style={{padding:"8px 20px 0",display:"flex",flexDirection:"column",gap:10}}>
        {loading
          ? <div style={{textAlign:"center",padding:60,color:"#475569",fontFamily:"'DM Mono',monospace",fontSize:12}}>Loading...</div>
          : filtered.length===0
            ? <div style={{textAlign:"center",padding:70}}>
                <div style={{fontSize:36,marginBottom:12,opacity:0.2}}>🗂</div>
                <p style={{color:"#475569",fontSize:13,margin:0}}>{jobs.length===0?"Drop a job posting in chat — I'll add it here":"No matches found"}</p>
              </div>
            : filtered.map(job=><Card key={job.id} job={job} onTap={()=>setSheet(job)}/>)
        }
      </div>

      {sheet     && <Sheet     job={sheet}     onEdit={j=>{ setSheet(null); setEditModal(j); }} onClose={()=>setSheet(null)} onResume={j=>setResumeModal(j)}/>}
      {editModal && <EditModal job={editModal} onClose={()=>setEditModal(null)} onSave={handleSave} onDelete={handleDelete}/>}
      {resumeModal && <ResumeGenerator job={resumeModal} onClose={()=>setResumeModal(null)}/>}
    </div>
  );
}
