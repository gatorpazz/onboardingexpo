import { BuildingAccess, CampusOverview, FitnessCenter, FunctionByBuilding } from './Amenities';
import { CalendarView } from './Calendar';
import { Cres } from './Cres';
import { MedicalEmergencies, Evacuation, SafetyTips, SevereWeather } from './EmployeeSafety';
import { Feedback } from './Feedback';
import { ReadersAndBadges, SecurityPolicies, CampusSecurityTips, SecurityContactInfoAndAdditionalResources } from './Security';

const routes = {
    CampusOverview: {
        screen: CampusOverview
    },
    BuildingAccess: {
        screen: BuildingAccess
    },
    FunctionByBuilding: {
        screen: FunctionByBuilding
    },
    FitnessCenter: {
        screen: FitnessCenter
    },
    MedicalEmergencies: {
        screen: MedicalEmergencies
    },
    CampusSafetyTips: {
        screen: SafetyTips
    },
    SevereWeather: {
        screen: SevereWeather
    },
    Evacuation: {
        screen: Evacuation
    },
    ReadersAndBadges: {
        screen: ReadersAndBadges
    },
    CampusSecurityTips: {
        screen: CampusSecurityTips
    },
    SecurityPolicies: {
        screen: SecurityPolicies
    },
    SecurityContact: {
        screen: SecurityContactInfoAndAdditionalResources
    },
    Cres: {
        screen: Cres
    },
    Calendar: {
        screen: CalendarView
    },
    Feedback: {
        screen: Feedback
    },
};

export default routes;
