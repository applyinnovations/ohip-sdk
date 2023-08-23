# ProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | Pointer to [**CustomerType**](CustomerType.md) |  | [optional] 
**Company** | Pointer to [**CompanyType**](CompanyType.md) |  | [optional] 
**ProfileImage** | Pointer to [**ImageSetType**](ImageSetType.md) |  | [optional] 
**Addresses** | Pointer to [**ProfileTypeAddresses**](ProfileTypeAddresses.md) |  | [optional] 
**BusinessSegments** | Pointer to **[]string** | Business/Market Segment associated to the profile. | [optional] 
**Territory** | Pointer to **string** | Territory associated to the profile. | [optional] 
**TraceCode** | Pointer to **string** | Trace Code associated to the profile. | [optional] 
**OwnerCode** | Pointer to **string** | Owner Code associated to the profile. | [optional] 
**InfluenceCode** | Pointer to **string** | Influence Code associated to the profile. | [optional] 
**Telephones** | Pointer to [**CompanyProfileTypeTelephones**](CompanyProfileTypeTelephones.md) |  | [optional] 
**Emails** | Pointer to [**CompanyProfileTypeEmails**](CompanyProfileTypeEmails.md) |  | [optional] 
**URLs** | Pointer to [**CompanyProfileTypeURLs**](CompanyProfileTypeURLs.md) |  | [optional] 
**Comments** | Pointer to [**CompanyProfileTypeComments**](CompanyProfileTypeComments.md) |  | [optional] 
**ProfileDeliveryMethods** | Pointer to [**ProfileTypeProfileDeliveryMethods**](ProfileTypeProfileDeliveryMethods.md) |  | [optional] 
**ProfileMemberships** | Pointer to [**CompanyProfileTypeProfileMemberships**](CompanyProfileTypeProfileMemberships.md) |  | [optional] 
**PreferenceCollection** | Pointer to [**CompanyProfileTypePreferenceCollection**](CompanyProfileTypePreferenceCollection.md) |  | [optional] 
**Keywords** | Pointer to [**CompanyProfileTypeKeywords**](CompanyProfileTypeKeywords.md) |  | [optional] 
**NegotiatedRates** | Pointer to [**CompanyProfileTypeNegotiatedRates**](CompanyProfileTypeNegotiatedRates.md) |  | [optional] 
**GdsNegotiatedRates** | Pointer to [**CompanyProfileTypeGdsNegotiatedRates**](CompanyProfileTypeGdsNegotiatedRates.md) |  | [optional] 
**ProfileIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**Relationships** | Pointer to [**CompanyProfileTypeRelationships**](CompanyProfileTypeRelationships.md) |  | [optional] 
**RelationshipsSummary** | Pointer to [**ProfileTypeRelationshipsSummary**](ProfileTypeRelationshipsSummary.md) |  | [optional] 
**StayReservationInfoList** | Pointer to [**ReservationStayHistoryFutureInfoType**](ReservationStayHistoryFutureInfoType.md) |  | [optional] 
**LastStayInfo** | Pointer to [**LastStayInfoType**](LastStayInfoType.md) |  | [optional] 
**ProfileAccessType** | Pointer to [**ProfileAccessType**](ProfileAccessType.md) |  | [optional] 
**ProfileRestrictions** | Pointer to [**ProfileRestrictions**](ProfileRestrictions.md) |  | [optional] 
**MailingActions** | Pointer to [**MailingActionsType**](MailingActionsType.md) |  | [optional] 
**PrivacyInfo** | Pointer to [**PrivacyInfoType**](PrivacyInfoType.md) |  | [optional] 
**Cashiering** | Pointer to [**ProfileCashieringType**](ProfileCashieringType.md) |  | [optional] 
**CommissionInfoList** | Pointer to [**[]ProfileCommissionType**](ProfileCommissionType.md) | Contains commission related details for the profile. | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**WebUserAccounts** | Pointer to [**[]WebUserAccountType**](WebUserAccountType.md) | Web User Accounts List. | [optional] 
**TaxInfo** | Pointer to [**ProfileTaxInfoType**](ProfileTaxInfoType.md) |  | [optional] 
**SalesInfo** | Pointer to [**SalesInfoType**](SalesInfoType.md) |  | [optional] 
**ECertificates** | Pointer to [**[]ECertificateType**](ECertificateType.md) | List of e-certificates for the profile. | [optional] 
**Subscriptions** | Pointer to [**[]ProfileSubscriptionType**](ProfileSubscriptionType.md) | Details of the OPERA Profile subscription to external system | [optional] 
**LocalizationGuestType** | Pointer to **string** | Localization Guest Type assocaited to the profile. | [optional] 
**EligibleForFiscalFolio** | Pointer to **string** | Eligible for Fiscal Folio/Payload generation. | [optional] 
**RoomOwnershipsList** | Pointer to [**ProfileTypeRoomOwnershipsList**](ProfileTypeRoomOwnershipsList.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**StatusCode** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**RegisteredProperty** | Pointer to **string** | Hotel which this profile is registered with. This attribute is not used for configuration. | [optional] 
**RequestForHotel** | Pointer to **string** | Hotel which this profile is to be registered. This attribute is only used during creation of profile. | [optional] 
**ProtectedBy** | Pointer to **string** | What level this profile is protected. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this profile as recently accessed. | [optional] 
**MarkForHistory** | Pointer to **bool** | \&quot;true\&quot; setting marks the profile to be kept from being purged, once the profile is marked inactive. | [optional] 
**HasCommission** | Pointer to **bool** | Populates true if the profile has commission configured false otherwise. | [optional] 
**InheritedNegRates** | Pointer to **bool** | Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. | [optional] 
**ShowInactiveRoomOwners** | Pointer to **bool** | Flag to show inactive Room Owners. | [optional] 

## Methods

### NewProfileType

`func NewProfileType() *ProfileType`

NewProfileType instantiates a new ProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeWithDefaults

`func NewProfileTypeWithDefaults() *ProfileType`

NewProfileTypeWithDefaults instantiates a new ProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomer

`func (o *ProfileType) GetCustomer() CustomerType`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *ProfileType) GetCustomerOk() (*CustomerType, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *ProfileType) SetCustomer(v CustomerType)`

SetCustomer sets Customer field to given value.

### HasCustomer

`func (o *ProfileType) HasCustomer() bool`

HasCustomer returns a boolean if a field has been set.

### GetCompany

`func (o *ProfileType) GetCompany() CompanyType`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *ProfileType) GetCompanyOk() (*CompanyType, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *ProfileType) SetCompany(v CompanyType)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *ProfileType) HasCompany() bool`

HasCompany returns a boolean if a field has been set.

### GetProfileImage

`func (o *ProfileType) GetProfileImage() ImageSetType`

GetProfileImage returns the ProfileImage field if non-nil, zero value otherwise.

### GetProfileImageOk

`func (o *ProfileType) GetProfileImageOk() (*ImageSetType, bool)`

GetProfileImageOk returns a tuple with the ProfileImage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileImage

`func (o *ProfileType) SetProfileImage(v ImageSetType)`

SetProfileImage sets ProfileImage field to given value.

### HasProfileImage

`func (o *ProfileType) HasProfileImage() bool`

HasProfileImage returns a boolean if a field has been set.

### GetAddresses

`func (o *ProfileType) GetAddresses() ProfileTypeAddresses`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *ProfileType) GetAddressesOk() (*ProfileTypeAddresses, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *ProfileType) SetAddresses(v ProfileTypeAddresses)`

SetAddresses sets Addresses field to given value.

### HasAddresses

`func (o *ProfileType) HasAddresses() bool`

HasAddresses returns a boolean if a field has been set.

### GetBusinessSegments

`func (o *ProfileType) GetBusinessSegments() []string`

GetBusinessSegments returns the BusinessSegments field if non-nil, zero value otherwise.

### GetBusinessSegmentsOk

`func (o *ProfileType) GetBusinessSegmentsOk() (*[]string, bool)`

GetBusinessSegmentsOk returns a tuple with the BusinessSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessSegments

`func (o *ProfileType) SetBusinessSegments(v []string)`

SetBusinessSegments sets BusinessSegments field to given value.

### HasBusinessSegments

`func (o *ProfileType) HasBusinessSegments() bool`

HasBusinessSegments returns a boolean if a field has been set.

### GetTerritory

`func (o *ProfileType) GetTerritory() string`

GetTerritory returns the Territory field if non-nil, zero value otherwise.

### GetTerritoryOk

`func (o *ProfileType) GetTerritoryOk() (*string, bool)`

GetTerritoryOk returns a tuple with the Territory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerritory

`func (o *ProfileType) SetTerritory(v string)`

SetTerritory sets Territory field to given value.

### HasTerritory

`func (o *ProfileType) HasTerritory() bool`

HasTerritory returns a boolean if a field has been set.

### GetTraceCode

`func (o *ProfileType) GetTraceCode() string`

GetTraceCode returns the TraceCode field if non-nil, zero value otherwise.

### GetTraceCodeOk

`func (o *ProfileType) GetTraceCodeOk() (*string, bool)`

GetTraceCodeOk returns a tuple with the TraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceCode

`func (o *ProfileType) SetTraceCode(v string)`

SetTraceCode sets TraceCode field to given value.

### HasTraceCode

`func (o *ProfileType) HasTraceCode() bool`

HasTraceCode returns a boolean if a field has been set.

### GetOwnerCode

`func (o *ProfileType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *ProfileType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *ProfileType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *ProfileType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetInfluenceCode

`func (o *ProfileType) GetInfluenceCode() string`

GetInfluenceCode returns the InfluenceCode field if non-nil, zero value otherwise.

### GetInfluenceCodeOk

`func (o *ProfileType) GetInfluenceCodeOk() (*string, bool)`

GetInfluenceCodeOk returns a tuple with the InfluenceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfluenceCode

`func (o *ProfileType) SetInfluenceCode(v string)`

SetInfluenceCode sets InfluenceCode field to given value.

### HasInfluenceCode

`func (o *ProfileType) HasInfluenceCode() bool`

HasInfluenceCode returns a boolean if a field has been set.

### GetTelephones

`func (o *ProfileType) GetTelephones() CompanyProfileTypeTelephones`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *ProfileType) GetTelephonesOk() (*CompanyProfileTypeTelephones, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *ProfileType) SetTelephones(v CompanyProfileTypeTelephones)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *ProfileType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetEmails

`func (o *ProfileType) GetEmails() CompanyProfileTypeEmails`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *ProfileType) GetEmailsOk() (*CompanyProfileTypeEmails, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *ProfileType) SetEmails(v CompanyProfileTypeEmails)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *ProfileType) HasEmails() bool`

HasEmails returns a boolean if a field has been set.

### GetURLs

`func (o *ProfileType) GetURLs() CompanyProfileTypeURLs`

GetURLs returns the URLs field if non-nil, zero value otherwise.

### GetURLsOk

`func (o *ProfileType) GetURLsOk() (*CompanyProfileTypeURLs, bool)`

GetURLsOk returns a tuple with the URLs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLs

`func (o *ProfileType) SetURLs(v CompanyProfileTypeURLs)`

SetURLs sets URLs field to given value.

### HasURLs

`func (o *ProfileType) HasURLs() bool`

HasURLs returns a boolean if a field has been set.

### GetComments

`func (o *ProfileType) GetComments() CompanyProfileTypeComments`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ProfileType) GetCommentsOk() (*CompanyProfileTypeComments, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ProfileType) SetComments(v CompanyProfileTypeComments)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ProfileType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetProfileDeliveryMethods

`func (o *ProfileType) GetProfileDeliveryMethods() ProfileTypeProfileDeliveryMethods`

GetProfileDeliveryMethods returns the ProfileDeliveryMethods field if non-nil, zero value otherwise.

### GetProfileDeliveryMethodsOk

`func (o *ProfileType) GetProfileDeliveryMethodsOk() (*ProfileTypeProfileDeliveryMethods, bool)`

GetProfileDeliveryMethodsOk returns a tuple with the ProfileDeliveryMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileDeliveryMethods

`func (o *ProfileType) SetProfileDeliveryMethods(v ProfileTypeProfileDeliveryMethods)`

SetProfileDeliveryMethods sets ProfileDeliveryMethods field to given value.

### HasProfileDeliveryMethods

`func (o *ProfileType) HasProfileDeliveryMethods() bool`

HasProfileDeliveryMethods returns a boolean if a field has been set.

### GetProfileMemberships

`func (o *ProfileType) GetProfileMemberships() CompanyProfileTypeProfileMemberships`

GetProfileMemberships returns the ProfileMemberships field if non-nil, zero value otherwise.

### GetProfileMembershipsOk

`func (o *ProfileType) GetProfileMembershipsOk() (*CompanyProfileTypeProfileMemberships, bool)`

GetProfileMembershipsOk returns a tuple with the ProfileMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMemberships

`func (o *ProfileType) SetProfileMemberships(v CompanyProfileTypeProfileMemberships)`

SetProfileMemberships sets ProfileMemberships field to given value.

### HasProfileMemberships

`func (o *ProfileType) HasProfileMemberships() bool`

HasProfileMemberships returns a boolean if a field has been set.

### GetPreferenceCollection

`func (o *ProfileType) GetPreferenceCollection() CompanyProfileTypePreferenceCollection`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *ProfileType) GetPreferenceCollectionOk() (*CompanyProfileTypePreferenceCollection, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *ProfileType) SetPreferenceCollection(v CompanyProfileTypePreferenceCollection)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *ProfileType) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetKeywords

`func (o *ProfileType) GetKeywords() CompanyProfileTypeKeywords`

GetKeywords returns the Keywords field if non-nil, zero value otherwise.

### GetKeywordsOk

`func (o *ProfileType) GetKeywordsOk() (*CompanyProfileTypeKeywords, bool)`

GetKeywordsOk returns a tuple with the Keywords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywords

`func (o *ProfileType) SetKeywords(v CompanyProfileTypeKeywords)`

SetKeywords sets Keywords field to given value.

### HasKeywords

`func (o *ProfileType) HasKeywords() bool`

HasKeywords returns a boolean if a field has been set.

### GetNegotiatedRates

`func (o *ProfileType) GetNegotiatedRates() CompanyProfileTypeNegotiatedRates`

GetNegotiatedRates returns the NegotiatedRates field if non-nil, zero value otherwise.

### GetNegotiatedRatesOk

`func (o *ProfileType) GetNegotiatedRatesOk() (*CompanyProfileTypeNegotiatedRates, bool)`

GetNegotiatedRatesOk returns a tuple with the NegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRates

`func (o *ProfileType) SetNegotiatedRates(v CompanyProfileTypeNegotiatedRates)`

SetNegotiatedRates sets NegotiatedRates field to given value.

### HasNegotiatedRates

`func (o *ProfileType) HasNegotiatedRates() bool`

HasNegotiatedRates returns a boolean if a field has been set.

### GetGdsNegotiatedRates

`func (o *ProfileType) GetGdsNegotiatedRates() CompanyProfileTypeGdsNegotiatedRates`

GetGdsNegotiatedRates returns the GdsNegotiatedRates field if non-nil, zero value otherwise.

### GetGdsNegotiatedRatesOk

`func (o *ProfileType) GetGdsNegotiatedRatesOk() (*CompanyProfileTypeGdsNegotiatedRates, bool)`

GetGdsNegotiatedRatesOk returns a tuple with the GdsNegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGdsNegotiatedRates

`func (o *ProfileType) SetGdsNegotiatedRates(v CompanyProfileTypeGdsNegotiatedRates)`

SetGdsNegotiatedRates sets GdsNegotiatedRates field to given value.

### HasGdsNegotiatedRates

`func (o *ProfileType) HasGdsNegotiatedRates() bool`

HasGdsNegotiatedRates returns a boolean if a field has been set.

### GetProfileIndicators

`func (o *ProfileType) GetProfileIndicators() []IndicatorType`

GetProfileIndicators returns the ProfileIndicators field if non-nil, zero value otherwise.

### GetProfileIndicatorsOk

`func (o *ProfileType) GetProfileIndicatorsOk() (*[]IndicatorType, bool)`

GetProfileIndicatorsOk returns a tuple with the ProfileIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIndicators

`func (o *ProfileType) SetProfileIndicators(v []IndicatorType)`

SetProfileIndicators sets ProfileIndicators field to given value.

### HasProfileIndicators

`func (o *ProfileType) HasProfileIndicators() bool`

HasProfileIndicators returns a boolean if a field has been set.

### GetRelationships

`func (o *ProfileType) GetRelationships() CompanyProfileTypeRelationships`

GetRelationships returns the Relationships field if non-nil, zero value otherwise.

### GetRelationshipsOk

`func (o *ProfileType) GetRelationshipsOk() (*CompanyProfileTypeRelationships, bool)`

GetRelationshipsOk returns a tuple with the Relationships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationships

`func (o *ProfileType) SetRelationships(v CompanyProfileTypeRelationships)`

SetRelationships sets Relationships field to given value.

### HasRelationships

`func (o *ProfileType) HasRelationships() bool`

HasRelationships returns a boolean if a field has been set.

### GetRelationshipsSummary

`func (o *ProfileType) GetRelationshipsSummary() ProfileTypeRelationshipsSummary`

GetRelationshipsSummary returns the RelationshipsSummary field if non-nil, zero value otherwise.

### GetRelationshipsSummaryOk

`func (o *ProfileType) GetRelationshipsSummaryOk() (*ProfileTypeRelationshipsSummary, bool)`

GetRelationshipsSummaryOk returns a tuple with the RelationshipsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipsSummary

`func (o *ProfileType) SetRelationshipsSummary(v ProfileTypeRelationshipsSummary)`

SetRelationshipsSummary sets RelationshipsSummary field to given value.

### HasRelationshipsSummary

`func (o *ProfileType) HasRelationshipsSummary() bool`

HasRelationshipsSummary returns a boolean if a field has been set.

### GetStayReservationInfoList

`func (o *ProfileType) GetStayReservationInfoList() ReservationStayHistoryFutureInfoType`

GetStayReservationInfoList returns the StayReservationInfoList field if non-nil, zero value otherwise.

### GetStayReservationInfoListOk

`func (o *ProfileType) GetStayReservationInfoListOk() (*ReservationStayHistoryFutureInfoType, bool)`

GetStayReservationInfoListOk returns a tuple with the StayReservationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayReservationInfoList

`func (o *ProfileType) SetStayReservationInfoList(v ReservationStayHistoryFutureInfoType)`

SetStayReservationInfoList sets StayReservationInfoList field to given value.

### HasStayReservationInfoList

`func (o *ProfileType) HasStayReservationInfoList() bool`

HasStayReservationInfoList returns a boolean if a field has been set.

### GetLastStayInfo

`func (o *ProfileType) GetLastStayInfo() LastStayInfoType`

GetLastStayInfo returns the LastStayInfo field if non-nil, zero value otherwise.

### GetLastStayInfoOk

`func (o *ProfileType) GetLastStayInfoOk() (*LastStayInfoType, bool)`

GetLastStayInfoOk returns a tuple with the LastStayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayInfo

`func (o *ProfileType) SetLastStayInfo(v LastStayInfoType)`

SetLastStayInfo sets LastStayInfo field to given value.

### HasLastStayInfo

`func (o *ProfileType) HasLastStayInfo() bool`

HasLastStayInfo returns a boolean if a field has been set.

### GetProfileAccessType

`func (o *ProfileType) GetProfileAccessType() ProfileAccessType`

GetProfileAccessType returns the ProfileAccessType field if non-nil, zero value otherwise.

### GetProfileAccessTypeOk

`func (o *ProfileType) GetProfileAccessTypeOk() (*ProfileAccessType, bool)`

GetProfileAccessTypeOk returns a tuple with the ProfileAccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAccessType

`func (o *ProfileType) SetProfileAccessType(v ProfileAccessType)`

SetProfileAccessType sets ProfileAccessType field to given value.

### HasProfileAccessType

`func (o *ProfileType) HasProfileAccessType() bool`

HasProfileAccessType returns a boolean if a field has been set.

### GetProfileRestrictions

`func (o *ProfileType) GetProfileRestrictions() ProfileRestrictions`

GetProfileRestrictions returns the ProfileRestrictions field if non-nil, zero value otherwise.

### GetProfileRestrictionsOk

`func (o *ProfileType) GetProfileRestrictionsOk() (*ProfileRestrictions, bool)`

GetProfileRestrictionsOk returns a tuple with the ProfileRestrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileRestrictions

`func (o *ProfileType) SetProfileRestrictions(v ProfileRestrictions)`

SetProfileRestrictions sets ProfileRestrictions field to given value.

### HasProfileRestrictions

`func (o *ProfileType) HasProfileRestrictions() bool`

HasProfileRestrictions returns a boolean if a field has been set.

### GetMailingActions

`func (o *ProfileType) GetMailingActions() MailingActionsType`

GetMailingActions returns the MailingActions field if non-nil, zero value otherwise.

### GetMailingActionsOk

`func (o *ProfileType) GetMailingActionsOk() (*MailingActionsType, bool)`

GetMailingActionsOk returns a tuple with the MailingActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailingActions

`func (o *ProfileType) SetMailingActions(v MailingActionsType)`

SetMailingActions sets MailingActions field to given value.

### HasMailingActions

`func (o *ProfileType) HasMailingActions() bool`

HasMailingActions returns a boolean if a field has been set.

### GetPrivacyInfo

`func (o *ProfileType) GetPrivacyInfo() PrivacyInfoType`

GetPrivacyInfo returns the PrivacyInfo field if non-nil, zero value otherwise.

### GetPrivacyInfoOk

`func (o *ProfileType) GetPrivacyInfoOk() (*PrivacyInfoType, bool)`

GetPrivacyInfoOk returns a tuple with the PrivacyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivacyInfo

`func (o *ProfileType) SetPrivacyInfo(v PrivacyInfoType)`

SetPrivacyInfo sets PrivacyInfo field to given value.

### HasPrivacyInfo

`func (o *ProfileType) HasPrivacyInfo() bool`

HasPrivacyInfo returns a boolean if a field has been set.

### GetCashiering

`func (o *ProfileType) GetCashiering() ProfileCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *ProfileType) GetCashieringOk() (*ProfileCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *ProfileType) SetCashiering(v ProfileCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *ProfileType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetCommissionInfoList

`func (o *ProfileType) GetCommissionInfoList() []ProfileCommissionType`

GetCommissionInfoList returns the CommissionInfoList field if non-nil, zero value otherwise.

### GetCommissionInfoListOk

`func (o *ProfileType) GetCommissionInfoListOk() (*[]ProfileCommissionType, bool)`

GetCommissionInfoListOk returns a tuple with the CommissionInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionInfoList

`func (o *ProfileType) SetCommissionInfoList(v []ProfileCommissionType)`

SetCommissionInfoList sets CommissionInfoList field to given value.

### HasCommissionInfoList

`func (o *ProfileType) HasCommissionInfoList() bool`

HasCommissionInfoList returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *ProfileType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *ProfileType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *ProfileType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *ProfileType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetWebUserAccounts

`func (o *ProfileType) GetWebUserAccounts() []WebUserAccountType`

GetWebUserAccounts returns the WebUserAccounts field if non-nil, zero value otherwise.

### GetWebUserAccountsOk

`func (o *ProfileType) GetWebUserAccountsOk() (*[]WebUserAccountType, bool)`

GetWebUserAccountsOk returns a tuple with the WebUserAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebUserAccounts

`func (o *ProfileType) SetWebUserAccounts(v []WebUserAccountType)`

SetWebUserAccounts sets WebUserAccounts field to given value.

### HasWebUserAccounts

`func (o *ProfileType) HasWebUserAccounts() bool`

HasWebUserAccounts returns a boolean if a field has been set.

### GetTaxInfo

`func (o *ProfileType) GetTaxInfo() ProfileTaxInfoType`

GetTaxInfo returns the TaxInfo field if non-nil, zero value otherwise.

### GetTaxInfoOk

`func (o *ProfileType) GetTaxInfoOk() (*ProfileTaxInfoType, bool)`

GetTaxInfoOk returns a tuple with the TaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInfo

`func (o *ProfileType) SetTaxInfo(v ProfileTaxInfoType)`

SetTaxInfo sets TaxInfo field to given value.

### HasTaxInfo

`func (o *ProfileType) HasTaxInfo() bool`

HasTaxInfo returns a boolean if a field has been set.

### GetSalesInfo

`func (o *ProfileType) GetSalesInfo() SalesInfoType`

GetSalesInfo returns the SalesInfo field if non-nil, zero value otherwise.

### GetSalesInfoOk

`func (o *ProfileType) GetSalesInfoOk() (*SalesInfoType, bool)`

GetSalesInfoOk returns a tuple with the SalesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesInfo

`func (o *ProfileType) SetSalesInfo(v SalesInfoType)`

SetSalesInfo sets SalesInfo field to given value.

### HasSalesInfo

`func (o *ProfileType) HasSalesInfo() bool`

HasSalesInfo returns a boolean if a field has been set.

### GetECertificates

`func (o *ProfileType) GetECertificates() []ECertificateType`

GetECertificates returns the ECertificates field if non-nil, zero value otherwise.

### GetECertificatesOk

`func (o *ProfileType) GetECertificatesOk() (*[]ECertificateType, bool)`

GetECertificatesOk returns a tuple with the ECertificates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificates

`func (o *ProfileType) SetECertificates(v []ECertificateType)`

SetECertificates sets ECertificates field to given value.

### HasECertificates

`func (o *ProfileType) HasECertificates() bool`

HasECertificates returns a boolean if a field has been set.

### GetSubscriptions

`func (o *ProfileType) GetSubscriptions() []ProfileSubscriptionType`

GetSubscriptions returns the Subscriptions field if non-nil, zero value otherwise.

### GetSubscriptionsOk

`func (o *ProfileType) GetSubscriptionsOk() (*[]ProfileSubscriptionType, bool)`

GetSubscriptionsOk returns a tuple with the Subscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptions

`func (o *ProfileType) SetSubscriptions(v []ProfileSubscriptionType)`

SetSubscriptions sets Subscriptions field to given value.

### HasSubscriptions

`func (o *ProfileType) HasSubscriptions() bool`

HasSubscriptions returns a boolean if a field has been set.

### GetLocalizationGuestType

`func (o *ProfileType) GetLocalizationGuestType() string`

GetLocalizationGuestType returns the LocalizationGuestType field if non-nil, zero value otherwise.

### GetLocalizationGuestTypeOk

`func (o *ProfileType) GetLocalizationGuestTypeOk() (*string, bool)`

GetLocalizationGuestTypeOk returns a tuple with the LocalizationGuestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizationGuestType

`func (o *ProfileType) SetLocalizationGuestType(v string)`

SetLocalizationGuestType sets LocalizationGuestType field to given value.

### HasLocalizationGuestType

`func (o *ProfileType) HasLocalizationGuestType() bool`

HasLocalizationGuestType returns a boolean if a field has been set.

### GetEligibleForFiscalFolio

`func (o *ProfileType) GetEligibleForFiscalFolio() string`

GetEligibleForFiscalFolio returns the EligibleForFiscalFolio field if non-nil, zero value otherwise.

### GetEligibleForFiscalFolioOk

`func (o *ProfileType) GetEligibleForFiscalFolioOk() (*string, bool)`

GetEligibleForFiscalFolioOk returns a tuple with the EligibleForFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEligibleForFiscalFolio

`func (o *ProfileType) SetEligibleForFiscalFolio(v string)`

SetEligibleForFiscalFolio sets EligibleForFiscalFolio field to given value.

### HasEligibleForFiscalFolio

`func (o *ProfileType) HasEligibleForFiscalFolio() bool`

HasEligibleForFiscalFolio returns a boolean if a field has been set.

### GetRoomOwnershipsList

`func (o *ProfileType) GetRoomOwnershipsList() ProfileTypeRoomOwnershipsList`

GetRoomOwnershipsList returns the RoomOwnershipsList field if non-nil, zero value otherwise.

### GetRoomOwnershipsListOk

`func (o *ProfileType) GetRoomOwnershipsListOk() (*ProfileTypeRoomOwnershipsList, bool)`

GetRoomOwnershipsListOk returns a tuple with the RoomOwnershipsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipsList

`func (o *ProfileType) SetRoomOwnershipsList(v ProfileTypeRoomOwnershipsList)`

SetRoomOwnershipsList sets RoomOwnershipsList field to given value.

### HasRoomOwnershipsList

`func (o *ProfileType) HasRoomOwnershipsList() bool`

HasRoomOwnershipsList returns a boolean if a field has been set.

### GetProfileType

`func (o *ProfileType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ProfileType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ProfileType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ProfileType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetStatusCode

`func (o *ProfileType) GetStatusCode() ProfileStatusType`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *ProfileType) GetStatusCodeOk() (*ProfileStatusType, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *ProfileType) SetStatusCode(v ProfileStatusType)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *ProfileType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetRegisteredProperty

`func (o *ProfileType) GetRegisteredProperty() string`

GetRegisteredProperty returns the RegisteredProperty field if non-nil, zero value otherwise.

### GetRegisteredPropertyOk

`func (o *ProfileType) GetRegisteredPropertyOk() (*string, bool)`

GetRegisteredPropertyOk returns a tuple with the RegisteredProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisteredProperty

`func (o *ProfileType) SetRegisteredProperty(v string)`

SetRegisteredProperty sets RegisteredProperty field to given value.

### HasRegisteredProperty

`func (o *ProfileType) HasRegisteredProperty() bool`

HasRegisteredProperty returns a boolean if a field has been set.

### GetRequestForHotel

`func (o *ProfileType) GetRequestForHotel() string`

GetRequestForHotel returns the RequestForHotel field if non-nil, zero value otherwise.

### GetRequestForHotelOk

`func (o *ProfileType) GetRequestForHotelOk() (*string, bool)`

GetRequestForHotelOk returns a tuple with the RequestForHotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestForHotel

`func (o *ProfileType) SetRequestForHotel(v string)`

SetRequestForHotel sets RequestForHotel field to given value.

### HasRequestForHotel

`func (o *ProfileType) HasRequestForHotel() bool`

HasRequestForHotel returns a boolean if a field has been set.

### GetProtectedBy

`func (o *ProfileType) GetProtectedBy() string`

GetProtectedBy returns the ProtectedBy field if non-nil, zero value otherwise.

### GetProtectedByOk

`func (o *ProfileType) GetProtectedByOk() (*string, bool)`

GetProtectedByOk returns a tuple with the ProtectedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectedBy

`func (o *ProfileType) SetProtectedBy(v string)`

SetProtectedBy sets ProtectedBy field to given value.

### HasProtectedBy

`func (o *ProfileType) HasProtectedBy() bool`

HasProtectedBy returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ProfileType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ProfileType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ProfileType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ProfileType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ProfileType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ProfileType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ProfileType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ProfileType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ProfileType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ProfileType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ProfileType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ProfileType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ProfileType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ProfileType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ProfileType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ProfileType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *ProfileType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *ProfileType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *ProfileType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *ProfileType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetMarkForHistory

`func (o *ProfileType) GetMarkForHistory() bool`

GetMarkForHistory returns the MarkForHistory field if non-nil, zero value otherwise.

### GetMarkForHistoryOk

`func (o *ProfileType) GetMarkForHistoryOk() (*bool, bool)`

GetMarkForHistoryOk returns a tuple with the MarkForHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkForHistory

`func (o *ProfileType) SetMarkForHistory(v bool)`

SetMarkForHistory sets MarkForHistory field to given value.

### HasMarkForHistory

`func (o *ProfileType) HasMarkForHistory() bool`

HasMarkForHistory returns a boolean if a field has been set.

### GetHasCommission

`func (o *ProfileType) GetHasCommission() bool`

GetHasCommission returns the HasCommission field if non-nil, zero value otherwise.

### GetHasCommissionOk

`func (o *ProfileType) GetHasCommissionOk() (*bool, bool)`

GetHasCommissionOk returns a tuple with the HasCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasCommission

`func (o *ProfileType) SetHasCommission(v bool)`

SetHasCommission sets HasCommission field to given value.

### HasHasCommission

`func (o *ProfileType) HasHasCommission() bool`

HasHasCommission returns a boolean if a field has been set.

### GetInheritedNegRates

`func (o *ProfileType) GetInheritedNegRates() bool`

GetInheritedNegRates returns the InheritedNegRates field if non-nil, zero value otherwise.

### GetInheritedNegRatesOk

`func (o *ProfileType) GetInheritedNegRatesOk() (*bool, bool)`

GetInheritedNegRatesOk returns a tuple with the InheritedNegRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritedNegRates

`func (o *ProfileType) SetInheritedNegRates(v bool)`

SetInheritedNegRates sets InheritedNegRates field to given value.

### HasInheritedNegRates

`func (o *ProfileType) HasInheritedNegRates() bool`

HasInheritedNegRates returns a boolean if a field has been set.

### GetShowInactiveRoomOwners

`func (o *ProfileType) GetShowInactiveRoomOwners() bool`

GetShowInactiveRoomOwners returns the ShowInactiveRoomOwners field if non-nil, zero value otherwise.

### GetShowInactiveRoomOwnersOk

`func (o *ProfileType) GetShowInactiveRoomOwnersOk() (*bool, bool)`

GetShowInactiveRoomOwnersOk returns a tuple with the ShowInactiveRoomOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowInactiveRoomOwners

`func (o *ProfileType) SetShowInactiveRoomOwners(v bool)`

SetShowInactiveRoomOwners sets ShowInactiveRoomOwners field to given value.

### HasShowInactiveRoomOwners

`func (o *ProfileType) HasShowInactiveRoomOwners() bool`

HasShowInactiveRoomOwners returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


