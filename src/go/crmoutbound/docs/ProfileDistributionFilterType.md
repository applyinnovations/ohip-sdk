# ProfileDistributionFilterType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueryId** | Pointer to [**ProfileDistributionFilterIDType**](ProfileDistributionFilterIDType.md) |  | [optional] 
**Code** | Pointer to **string** | Name or code for the query. | [optional] 
**Description** | Pointer to **string** | Short description for the query. | [optional] 
**ToDatabases** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**FromDatabases** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**FromCountry** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**FromTerritory** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**ProfileType** | Pointer to **string** | Profile Type. | [optional] 
**MembershipType** | Pointer to **string** | Membership Type. | [optional] 
**MembershipLevels** | Pointer to **string** | List of membership levels for the membership type. | [optional] 
**Nationalities** | Pointer to **string** | List of nationalities to which profile could belong to. | [optional] 
**VIPStatuses** | Pointer to **string** | VIP status list. | [optional] 
**Restricted** | Pointer to **bool** | Restricted profiles. Restricted/Unrestricted/All | [optional] 
**KeywordType** | Pointer to **string** | Name keyword type. | [optional] 
**Keyword** | Pointer to **string** | Name keyword. | [optional] 
**GuestLanguages** | Pointer to **string** | List of guest Languages. | [optional] 
**FromStayDate** | Pointer to **string** | From date range from for arrival or departure date on stay record. | [optional] 
**ToStayDate** | Pointer to **string** | To date range from for arrival or departure date on stay record. | [optional] 
**RoomLabels** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**StayResorts** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**StayChains** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**TotalRevenue** | Pointer to **float32** | Sum of total revenue on stay records for the time period. | [optional] 
**TotalRoomRevenue** | Pointer to **float32** | Sum of room revenue on stay records for the time period. | [optional] 
**TotalNights** | Pointer to **float32** | Sum of nights on stay records for the time period. | [optional] 
**TotalStays** | Pointer to **float32** | Sum of total number of stays on stay records for the time period. | [optional] 
**MinimumStayResorts** | Pointer to **float32** | Minimum number of different resorts profile has stayed for the time period. | [optional] 
**LastRunDate** | Pointer to **string** | Last server date time when the query was run. | [optional] 
**IncludeInactiveProfile** | Pointer to **bool** | Include inactive profiles also. Inactive profiles are profiles which are marked as N on active_yn flag. | [optional] 
**CreditRating** | Pointer to **string** | Profile credit rating. | [optional] 
**TopNumber** | Pointer to **float32** | Number of top records (for the Top filter). | [optional] 
**TopBasedOn** | Pointer to **string** | What is the top filter based on (e.g. total revenue, or number of nights). | [optional] 
**ExcludeStay** | Pointer to **bool** | Exclude the from and to stay period. | [optional] 
**RevenueType** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**TotalRevenueTypeAmount** | Pointer to **float32** | Total amount of Membership Revenue Type. | [optional] 
**CustomFilter** | Pointer to **string** | User defined custom sql filter. It is to be used by users who know SQL. Basic purpose is that user who know sql should not have to come to development for small changes in the filter. | [optional] 
**ReportId** | Pointer to **float32** | Membership TSC Report Id. | [optional] 

## Methods

### NewProfileDistributionFilterType

`func NewProfileDistributionFilterType() *ProfileDistributionFilterType`

NewProfileDistributionFilterType instantiates a new ProfileDistributionFilterType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileDistributionFilterTypeWithDefaults

`func NewProfileDistributionFilterTypeWithDefaults() *ProfileDistributionFilterType`

NewProfileDistributionFilterTypeWithDefaults instantiates a new ProfileDistributionFilterType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueryId

`func (o *ProfileDistributionFilterType) GetQueryId() ProfileDistributionFilterIDType`

GetQueryId returns the QueryId field if non-nil, zero value otherwise.

### GetQueryIdOk

`func (o *ProfileDistributionFilterType) GetQueryIdOk() (*ProfileDistributionFilterIDType, bool)`

GetQueryIdOk returns a tuple with the QueryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryId

`func (o *ProfileDistributionFilterType) SetQueryId(v ProfileDistributionFilterIDType)`

SetQueryId sets QueryId field to given value.

### HasQueryId

`func (o *ProfileDistributionFilterType) HasQueryId() bool`

HasQueryId returns a boolean if a field has been set.

### GetCode

`func (o *ProfileDistributionFilterType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ProfileDistributionFilterType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ProfileDistributionFilterType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ProfileDistributionFilterType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ProfileDistributionFilterType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProfileDistributionFilterType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProfileDistributionFilterType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ProfileDistributionFilterType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetToDatabases

`func (o *ProfileDistributionFilterType) GetToDatabases() CodeListType`

GetToDatabases returns the ToDatabases field if non-nil, zero value otherwise.

### GetToDatabasesOk

`func (o *ProfileDistributionFilterType) GetToDatabasesOk() (*CodeListType, bool)`

GetToDatabasesOk returns a tuple with the ToDatabases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToDatabases

`func (o *ProfileDistributionFilterType) SetToDatabases(v CodeListType)`

SetToDatabases sets ToDatabases field to given value.

### HasToDatabases

`func (o *ProfileDistributionFilterType) HasToDatabases() bool`

HasToDatabases returns a boolean if a field has been set.

### GetFromDatabases

`func (o *ProfileDistributionFilterType) GetFromDatabases() CodeListType`

GetFromDatabases returns the FromDatabases field if non-nil, zero value otherwise.

### GetFromDatabasesOk

`func (o *ProfileDistributionFilterType) GetFromDatabasesOk() (*CodeListType, bool)`

GetFromDatabasesOk returns a tuple with the FromDatabases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromDatabases

`func (o *ProfileDistributionFilterType) SetFromDatabases(v CodeListType)`

SetFromDatabases sets FromDatabases field to given value.

### HasFromDatabases

`func (o *ProfileDistributionFilterType) HasFromDatabases() bool`

HasFromDatabases returns a boolean if a field has been set.

### GetFromCountry

`func (o *ProfileDistributionFilterType) GetFromCountry() CodeListType`

GetFromCountry returns the FromCountry field if non-nil, zero value otherwise.

### GetFromCountryOk

`func (o *ProfileDistributionFilterType) GetFromCountryOk() (*CodeListType, bool)`

GetFromCountryOk returns a tuple with the FromCountry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromCountry

`func (o *ProfileDistributionFilterType) SetFromCountry(v CodeListType)`

SetFromCountry sets FromCountry field to given value.

### HasFromCountry

`func (o *ProfileDistributionFilterType) HasFromCountry() bool`

HasFromCountry returns a boolean if a field has been set.

### GetFromTerritory

`func (o *ProfileDistributionFilterType) GetFromTerritory() CodeListType`

GetFromTerritory returns the FromTerritory field if non-nil, zero value otherwise.

### GetFromTerritoryOk

`func (o *ProfileDistributionFilterType) GetFromTerritoryOk() (*CodeListType, bool)`

GetFromTerritoryOk returns a tuple with the FromTerritory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromTerritory

`func (o *ProfileDistributionFilterType) SetFromTerritory(v CodeListType)`

SetFromTerritory sets FromTerritory field to given value.

### HasFromTerritory

`func (o *ProfileDistributionFilterType) HasFromTerritory() bool`

HasFromTerritory returns a boolean if a field has been set.

### GetProfileType

`func (o *ProfileDistributionFilterType) GetProfileType() string`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ProfileDistributionFilterType) GetProfileTypeOk() (*string, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ProfileDistributionFilterType) SetProfileType(v string)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ProfileDistributionFilterType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetMembershipType

`func (o *ProfileDistributionFilterType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ProfileDistributionFilterType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ProfileDistributionFilterType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ProfileDistributionFilterType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipLevels

`func (o *ProfileDistributionFilterType) GetMembershipLevels() string`

GetMembershipLevels returns the MembershipLevels field if non-nil, zero value otherwise.

### GetMembershipLevelsOk

`func (o *ProfileDistributionFilterType) GetMembershipLevelsOk() (*string, bool)`

GetMembershipLevelsOk returns a tuple with the MembershipLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevels

`func (o *ProfileDistributionFilterType) SetMembershipLevels(v string)`

SetMembershipLevels sets MembershipLevels field to given value.

### HasMembershipLevels

`func (o *ProfileDistributionFilterType) HasMembershipLevels() bool`

HasMembershipLevels returns a boolean if a field has been set.

### GetNationalities

`func (o *ProfileDistributionFilterType) GetNationalities() string`

GetNationalities returns the Nationalities field if non-nil, zero value otherwise.

### GetNationalitiesOk

`func (o *ProfileDistributionFilterType) GetNationalitiesOk() (*string, bool)`

GetNationalitiesOk returns a tuple with the Nationalities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationalities

`func (o *ProfileDistributionFilterType) SetNationalities(v string)`

SetNationalities sets Nationalities field to given value.

### HasNationalities

`func (o *ProfileDistributionFilterType) HasNationalities() bool`

HasNationalities returns a boolean if a field has been set.

### GetVIPStatuses

`func (o *ProfileDistributionFilterType) GetVIPStatuses() string`

GetVIPStatuses returns the VIPStatuses field if non-nil, zero value otherwise.

### GetVIPStatusesOk

`func (o *ProfileDistributionFilterType) GetVIPStatusesOk() (*string, bool)`

GetVIPStatusesOk returns a tuple with the VIPStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVIPStatuses

`func (o *ProfileDistributionFilterType) SetVIPStatuses(v string)`

SetVIPStatuses sets VIPStatuses field to given value.

### HasVIPStatuses

`func (o *ProfileDistributionFilterType) HasVIPStatuses() bool`

HasVIPStatuses returns a boolean if a field has been set.

### GetRestricted

`func (o *ProfileDistributionFilterType) GetRestricted() bool`

GetRestricted returns the Restricted field if non-nil, zero value otherwise.

### GetRestrictedOk

`func (o *ProfileDistributionFilterType) GetRestrictedOk() (*bool, bool)`

GetRestrictedOk returns a tuple with the Restricted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestricted

`func (o *ProfileDistributionFilterType) SetRestricted(v bool)`

SetRestricted sets Restricted field to given value.

### HasRestricted

`func (o *ProfileDistributionFilterType) HasRestricted() bool`

HasRestricted returns a boolean if a field has been set.

### GetKeywordType

`func (o *ProfileDistributionFilterType) GetKeywordType() string`

GetKeywordType returns the KeywordType field if non-nil, zero value otherwise.

### GetKeywordTypeOk

`func (o *ProfileDistributionFilterType) GetKeywordTypeOk() (*string, bool)`

GetKeywordTypeOk returns a tuple with the KeywordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywordType

`func (o *ProfileDistributionFilterType) SetKeywordType(v string)`

SetKeywordType sets KeywordType field to given value.

### HasKeywordType

`func (o *ProfileDistributionFilterType) HasKeywordType() bool`

HasKeywordType returns a boolean if a field has been set.

### GetKeyword

`func (o *ProfileDistributionFilterType) GetKeyword() string`

GetKeyword returns the Keyword field if non-nil, zero value otherwise.

### GetKeywordOk

`func (o *ProfileDistributionFilterType) GetKeywordOk() (*string, bool)`

GetKeywordOk returns a tuple with the Keyword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyword

`func (o *ProfileDistributionFilterType) SetKeyword(v string)`

SetKeyword sets Keyword field to given value.

### HasKeyword

`func (o *ProfileDistributionFilterType) HasKeyword() bool`

HasKeyword returns a boolean if a field has been set.

### GetGuestLanguages

`func (o *ProfileDistributionFilterType) GetGuestLanguages() string`

GetGuestLanguages returns the GuestLanguages field if non-nil, zero value otherwise.

### GetGuestLanguagesOk

`func (o *ProfileDistributionFilterType) GetGuestLanguagesOk() (*string, bool)`

GetGuestLanguagesOk returns a tuple with the GuestLanguages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestLanguages

`func (o *ProfileDistributionFilterType) SetGuestLanguages(v string)`

SetGuestLanguages sets GuestLanguages field to given value.

### HasGuestLanguages

`func (o *ProfileDistributionFilterType) HasGuestLanguages() bool`

HasGuestLanguages returns a boolean if a field has been set.

### GetFromStayDate

`func (o *ProfileDistributionFilterType) GetFromStayDate() string`

GetFromStayDate returns the FromStayDate field if non-nil, zero value otherwise.

### GetFromStayDateOk

`func (o *ProfileDistributionFilterType) GetFromStayDateOk() (*string, bool)`

GetFromStayDateOk returns a tuple with the FromStayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromStayDate

`func (o *ProfileDistributionFilterType) SetFromStayDate(v string)`

SetFromStayDate sets FromStayDate field to given value.

### HasFromStayDate

`func (o *ProfileDistributionFilterType) HasFromStayDate() bool`

HasFromStayDate returns a boolean if a field has been set.

### GetToStayDate

`func (o *ProfileDistributionFilterType) GetToStayDate() string`

GetToStayDate returns the ToStayDate field if non-nil, zero value otherwise.

### GetToStayDateOk

`func (o *ProfileDistributionFilterType) GetToStayDateOk() (*string, bool)`

GetToStayDateOk returns a tuple with the ToStayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToStayDate

`func (o *ProfileDistributionFilterType) SetToStayDate(v string)`

SetToStayDate sets ToStayDate field to given value.

### HasToStayDate

`func (o *ProfileDistributionFilterType) HasToStayDate() bool`

HasToStayDate returns a boolean if a field has been set.

### GetRoomLabels

`func (o *ProfileDistributionFilterType) GetRoomLabels() CodeListType`

GetRoomLabels returns the RoomLabels field if non-nil, zero value otherwise.

### GetRoomLabelsOk

`func (o *ProfileDistributionFilterType) GetRoomLabelsOk() (*CodeListType, bool)`

GetRoomLabelsOk returns a tuple with the RoomLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomLabels

`func (o *ProfileDistributionFilterType) SetRoomLabels(v CodeListType)`

SetRoomLabels sets RoomLabels field to given value.

### HasRoomLabels

`func (o *ProfileDistributionFilterType) HasRoomLabels() bool`

HasRoomLabels returns a boolean if a field has been set.

### GetStayResorts

`func (o *ProfileDistributionFilterType) GetStayResorts() CodeListType`

GetStayResorts returns the StayResorts field if non-nil, zero value otherwise.

### GetStayResortsOk

`func (o *ProfileDistributionFilterType) GetStayResortsOk() (*CodeListType, bool)`

GetStayResortsOk returns a tuple with the StayResorts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayResorts

`func (o *ProfileDistributionFilterType) SetStayResorts(v CodeListType)`

SetStayResorts sets StayResorts field to given value.

### HasStayResorts

`func (o *ProfileDistributionFilterType) HasStayResorts() bool`

HasStayResorts returns a boolean if a field has been set.

### GetStayChains

`func (o *ProfileDistributionFilterType) GetStayChains() CodeListType`

GetStayChains returns the StayChains field if non-nil, zero value otherwise.

### GetStayChainsOk

`func (o *ProfileDistributionFilterType) GetStayChainsOk() (*CodeListType, bool)`

GetStayChainsOk returns a tuple with the StayChains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayChains

`func (o *ProfileDistributionFilterType) SetStayChains(v CodeListType)`

SetStayChains sets StayChains field to given value.

### HasStayChains

`func (o *ProfileDistributionFilterType) HasStayChains() bool`

HasStayChains returns a boolean if a field has been set.

### GetTotalRevenue

`func (o *ProfileDistributionFilterType) GetTotalRevenue() float32`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *ProfileDistributionFilterType) GetTotalRevenueOk() (*float32, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *ProfileDistributionFilterType) SetTotalRevenue(v float32)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *ProfileDistributionFilterType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetTotalRoomRevenue

`func (o *ProfileDistributionFilterType) GetTotalRoomRevenue() float32`

GetTotalRoomRevenue returns the TotalRoomRevenue field if non-nil, zero value otherwise.

### GetTotalRoomRevenueOk

`func (o *ProfileDistributionFilterType) GetTotalRoomRevenueOk() (*float32, bool)`

GetTotalRoomRevenueOk returns a tuple with the TotalRoomRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRoomRevenue

`func (o *ProfileDistributionFilterType) SetTotalRoomRevenue(v float32)`

SetTotalRoomRevenue sets TotalRoomRevenue field to given value.

### HasTotalRoomRevenue

`func (o *ProfileDistributionFilterType) HasTotalRoomRevenue() bool`

HasTotalRoomRevenue returns a boolean if a field has been set.

### GetTotalNights

`func (o *ProfileDistributionFilterType) GetTotalNights() float32`

GetTotalNights returns the TotalNights field if non-nil, zero value otherwise.

### GetTotalNightsOk

`func (o *ProfileDistributionFilterType) GetTotalNightsOk() (*float32, bool)`

GetTotalNightsOk returns a tuple with the TotalNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalNights

`func (o *ProfileDistributionFilterType) SetTotalNights(v float32)`

SetTotalNights sets TotalNights field to given value.

### HasTotalNights

`func (o *ProfileDistributionFilterType) HasTotalNights() bool`

HasTotalNights returns a boolean if a field has been set.

### GetTotalStays

`func (o *ProfileDistributionFilterType) GetTotalStays() float32`

GetTotalStays returns the TotalStays field if non-nil, zero value otherwise.

### GetTotalStaysOk

`func (o *ProfileDistributionFilterType) GetTotalStaysOk() (*float32, bool)`

GetTotalStaysOk returns a tuple with the TotalStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalStays

`func (o *ProfileDistributionFilterType) SetTotalStays(v float32)`

SetTotalStays sets TotalStays field to given value.

### HasTotalStays

`func (o *ProfileDistributionFilterType) HasTotalStays() bool`

HasTotalStays returns a boolean if a field has been set.

### GetMinimumStayResorts

`func (o *ProfileDistributionFilterType) GetMinimumStayResorts() float32`

GetMinimumStayResorts returns the MinimumStayResorts field if non-nil, zero value otherwise.

### GetMinimumStayResortsOk

`func (o *ProfileDistributionFilterType) GetMinimumStayResortsOk() (*float32, bool)`

GetMinimumStayResortsOk returns a tuple with the MinimumStayResorts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumStayResorts

`func (o *ProfileDistributionFilterType) SetMinimumStayResorts(v float32)`

SetMinimumStayResorts sets MinimumStayResorts field to given value.

### HasMinimumStayResorts

`func (o *ProfileDistributionFilterType) HasMinimumStayResorts() bool`

HasMinimumStayResorts returns a boolean if a field has been set.

### GetLastRunDate

`func (o *ProfileDistributionFilterType) GetLastRunDate() string`

GetLastRunDate returns the LastRunDate field if non-nil, zero value otherwise.

### GetLastRunDateOk

`func (o *ProfileDistributionFilterType) GetLastRunDateOk() (*string, bool)`

GetLastRunDateOk returns a tuple with the LastRunDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRunDate

`func (o *ProfileDistributionFilterType) SetLastRunDate(v string)`

SetLastRunDate sets LastRunDate field to given value.

### HasLastRunDate

`func (o *ProfileDistributionFilterType) HasLastRunDate() bool`

HasLastRunDate returns a boolean if a field has been set.

### GetIncludeInactiveProfile

`func (o *ProfileDistributionFilterType) GetIncludeInactiveProfile() bool`

GetIncludeInactiveProfile returns the IncludeInactiveProfile field if non-nil, zero value otherwise.

### GetIncludeInactiveProfileOk

`func (o *ProfileDistributionFilterType) GetIncludeInactiveProfileOk() (*bool, bool)`

GetIncludeInactiveProfileOk returns a tuple with the IncludeInactiveProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeInactiveProfile

`func (o *ProfileDistributionFilterType) SetIncludeInactiveProfile(v bool)`

SetIncludeInactiveProfile sets IncludeInactiveProfile field to given value.

### HasIncludeInactiveProfile

`func (o *ProfileDistributionFilterType) HasIncludeInactiveProfile() bool`

HasIncludeInactiveProfile returns a boolean if a field has been set.

### GetCreditRating

`func (o *ProfileDistributionFilterType) GetCreditRating() string`

GetCreditRating returns the CreditRating field if non-nil, zero value otherwise.

### GetCreditRatingOk

`func (o *ProfileDistributionFilterType) GetCreditRatingOk() (*string, bool)`

GetCreditRatingOk returns a tuple with the CreditRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRating

`func (o *ProfileDistributionFilterType) SetCreditRating(v string)`

SetCreditRating sets CreditRating field to given value.

### HasCreditRating

`func (o *ProfileDistributionFilterType) HasCreditRating() bool`

HasCreditRating returns a boolean if a field has been set.

### GetTopNumber

`func (o *ProfileDistributionFilterType) GetTopNumber() float32`

GetTopNumber returns the TopNumber field if non-nil, zero value otherwise.

### GetTopNumberOk

`func (o *ProfileDistributionFilterType) GetTopNumberOk() (*float32, bool)`

GetTopNumberOk returns a tuple with the TopNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopNumber

`func (o *ProfileDistributionFilterType) SetTopNumber(v float32)`

SetTopNumber sets TopNumber field to given value.

### HasTopNumber

`func (o *ProfileDistributionFilterType) HasTopNumber() bool`

HasTopNumber returns a boolean if a field has been set.

### GetTopBasedOn

`func (o *ProfileDistributionFilterType) GetTopBasedOn() string`

GetTopBasedOn returns the TopBasedOn field if non-nil, zero value otherwise.

### GetTopBasedOnOk

`func (o *ProfileDistributionFilterType) GetTopBasedOnOk() (*string, bool)`

GetTopBasedOnOk returns a tuple with the TopBasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopBasedOn

`func (o *ProfileDistributionFilterType) SetTopBasedOn(v string)`

SetTopBasedOn sets TopBasedOn field to given value.

### HasTopBasedOn

`func (o *ProfileDistributionFilterType) HasTopBasedOn() bool`

HasTopBasedOn returns a boolean if a field has been set.

### GetExcludeStay

`func (o *ProfileDistributionFilterType) GetExcludeStay() bool`

GetExcludeStay returns the ExcludeStay field if non-nil, zero value otherwise.

### GetExcludeStayOk

`func (o *ProfileDistributionFilterType) GetExcludeStayOk() (*bool, bool)`

GetExcludeStayOk returns a tuple with the ExcludeStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeStay

`func (o *ProfileDistributionFilterType) SetExcludeStay(v bool)`

SetExcludeStay sets ExcludeStay field to given value.

### HasExcludeStay

`func (o *ProfileDistributionFilterType) HasExcludeStay() bool`

HasExcludeStay returns a boolean if a field has been set.

### GetRevenueType

`func (o *ProfileDistributionFilterType) GetRevenueType() CodeListType`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *ProfileDistributionFilterType) GetRevenueTypeOk() (*CodeListType, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *ProfileDistributionFilterType) SetRevenueType(v CodeListType)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *ProfileDistributionFilterType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetTotalRevenueTypeAmount

`func (o *ProfileDistributionFilterType) GetTotalRevenueTypeAmount() float32`

GetTotalRevenueTypeAmount returns the TotalRevenueTypeAmount field if non-nil, zero value otherwise.

### GetTotalRevenueTypeAmountOk

`func (o *ProfileDistributionFilterType) GetTotalRevenueTypeAmountOk() (*float32, bool)`

GetTotalRevenueTypeAmountOk returns a tuple with the TotalRevenueTypeAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenueTypeAmount

`func (o *ProfileDistributionFilterType) SetTotalRevenueTypeAmount(v float32)`

SetTotalRevenueTypeAmount sets TotalRevenueTypeAmount field to given value.

### HasTotalRevenueTypeAmount

`func (o *ProfileDistributionFilterType) HasTotalRevenueTypeAmount() bool`

HasTotalRevenueTypeAmount returns a boolean if a field has been set.

### GetCustomFilter

`func (o *ProfileDistributionFilterType) GetCustomFilter() string`

GetCustomFilter returns the CustomFilter field if non-nil, zero value otherwise.

### GetCustomFilterOk

`func (o *ProfileDistributionFilterType) GetCustomFilterOk() (*string, bool)`

GetCustomFilterOk returns a tuple with the CustomFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFilter

`func (o *ProfileDistributionFilterType) SetCustomFilter(v string)`

SetCustomFilter sets CustomFilter field to given value.

### HasCustomFilter

`func (o *ProfileDistributionFilterType) HasCustomFilter() bool`

HasCustomFilter returns a boolean if a field has been set.

### GetReportId

`func (o *ProfileDistributionFilterType) GetReportId() float32`

GetReportId returns the ReportId field if non-nil, zero value otherwise.

### GetReportIdOk

`func (o *ProfileDistributionFilterType) GetReportIdOk() (*float32, bool)`

GetReportIdOk returns a tuple with the ReportId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportId

`func (o *ProfileDistributionFilterType) SetReportId(v float32)`

SetReportId sets ReportId field to given value.

### HasReportId

`func (o *ProfileDistributionFilterType) HasReportId() bool`

HasReportId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


