# CompanyProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Company** | Pointer to [**CompanyType**](CompanyType.md) |  | [optional] 
**ProfileImage** | Pointer to [**ImageSetType**](ImageSetType.md) |  | [optional] 
**Addresses** | Pointer to [**CompanyProfileTypeAddresses**](CompanyProfileTypeAddresses.md) |  | [optional] 
**BusinessSegments** | Pointer to **[]string** | Business/Market Segment associated to the profile. | [optional] 
**Territory** | Pointer to **string** | Territory associated to the profile. | [optional] 
**TraceCode** | Pointer to **string** | Trace Code associated to the profile. | [optional] 
**OwnerCode** | Pointer to **string** | Owner Code associated to the profile. | [optional] 
**InfluenceCode** | Pointer to **string** | Influence Code associated to the profile. | [optional] 
**Telephones** | Pointer to [**CompanyProfileTypeTelephones**](CompanyProfileTypeTelephones.md) |  | [optional] 
**Emails** | Pointer to [**CompanyProfileTypeEmails**](CompanyProfileTypeEmails.md) |  | [optional] 
**URLs** | Pointer to [**CompanyProfileTypeURLs**](CompanyProfileTypeURLs.md) |  | [optional] 
**Comments** | Pointer to [**CompanyProfileTypeComments**](CompanyProfileTypeComments.md) |  | [optional] 
**ProfileMemberships** | Pointer to [**CompanyProfileTypeProfileMemberships**](CompanyProfileTypeProfileMemberships.md) |  | [optional] 
**PreferenceCollection** | Pointer to [**CompanyProfileTypePreferenceCollection**](CompanyProfileTypePreferenceCollection.md) |  | [optional] 
**Keywords** | Pointer to [**CompanyProfileTypeKeywords**](CompanyProfileTypeKeywords.md) |  | [optional] 
**NegotiatedRates** | Pointer to [**CompanyProfileTypeNegotiatedRates**](CompanyProfileTypeNegotiatedRates.md) |  | [optional] 
**GdsNegotiatedRates** | Pointer to [**CompanyProfileTypeGdsNegotiatedRates**](CompanyProfileTypeGdsNegotiatedRates.md) |  | [optional] 
**ProfileIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**Relationships** | Pointer to [**CompanyProfileTypeRelationships**](CompanyProfileTypeRelationships.md) |  | [optional] 
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
**LocalizationGuestType** | Pointer to **string** | Localization Guest Type associated to the profile. | [optional] 
**EligibleForFiscalFolio** | Pointer to **string** | Eligible for Fiscal Folio/Payload generation. | [optional] 
**ProfileType** | Pointer to [**CompanyProfileTypeType**](CompanyProfileTypeType.md) |  | [optional] 
**StatusCode** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**RegisteredProperty** | Pointer to **string** | Hotel which this profile is registered with. This attribute is not used for configuration. | [optional] 
**RequestForHotel** | Pointer to **string** | Hotel which this profile is to be registered. This attribute is only used during creation of profile. | [optional] 
**ProtectedBy** | Pointer to **string** | What level this profile is protected. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this profile as recently accessed. | [optional] 
**MarkForHistory** | Pointer to **bool** | \&quot;true\&quot; setting marks the profile to be kept from being purged, once the profile is marked inactive. | [optional] 
**HasCommission** | Pointer to **bool** | Populates true if the profile has commission configured false otherwise. | [optional] 
**InheritedNegRates** | Pointer to **bool** | Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. | [optional] 

## Methods

### NewCompanyProfileType

`func NewCompanyProfileType() *CompanyProfileType`

NewCompanyProfileType instantiates a new CompanyProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyProfileTypeWithDefaults

`func NewCompanyProfileTypeWithDefaults() *CompanyProfileType`

NewCompanyProfileTypeWithDefaults instantiates a new CompanyProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompany

`func (o *CompanyProfileType) GetCompany() CompanyType`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *CompanyProfileType) GetCompanyOk() (*CompanyType, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *CompanyProfileType) SetCompany(v CompanyType)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *CompanyProfileType) HasCompany() bool`

HasCompany returns a boolean if a field has been set.

### GetProfileImage

`func (o *CompanyProfileType) GetProfileImage() ImageSetType`

GetProfileImage returns the ProfileImage field if non-nil, zero value otherwise.

### GetProfileImageOk

`func (o *CompanyProfileType) GetProfileImageOk() (*ImageSetType, bool)`

GetProfileImageOk returns a tuple with the ProfileImage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileImage

`func (o *CompanyProfileType) SetProfileImage(v ImageSetType)`

SetProfileImage sets ProfileImage field to given value.

### HasProfileImage

`func (o *CompanyProfileType) HasProfileImage() bool`

HasProfileImage returns a boolean if a field has been set.

### GetAddresses

`func (o *CompanyProfileType) GetAddresses() CompanyProfileTypeAddresses`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *CompanyProfileType) GetAddressesOk() (*CompanyProfileTypeAddresses, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *CompanyProfileType) SetAddresses(v CompanyProfileTypeAddresses)`

SetAddresses sets Addresses field to given value.

### HasAddresses

`func (o *CompanyProfileType) HasAddresses() bool`

HasAddresses returns a boolean if a field has been set.

### GetBusinessSegments

`func (o *CompanyProfileType) GetBusinessSegments() []string`

GetBusinessSegments returns the BusinessSegments field if non-nil, zero value otherwise.

### GetBusinessSegmentsOk

`func (o *CompanyProfileType) GetBusinessSegmentsOk() (*[]string, bool)`

GetBusinessSegmentsOk returns a tuple with the BusinessSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessSegments

`func (o *CompanyProfileType) SetBusinessSegments(v []string)`

SetBusinessSegments sets BusinessSegments field to given value.

### HasBusinessSegments

`func (o *CompanyProfileType) HasBusinessSegments() bool`

HasBusinessSegments returns a boolean if a field has been set.

### GetTerritory

`func (o *CompanyProfileType) GetTerritory() string`

GetTerritory returns the Territory field if non-nil, zero value otherwise.

### GetTerritoryOk

`func (o *CompanyProfileType) GetTerritoryOk() (*string, bool)`

GetTerritoryOk returns a tuple with the Territory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerritory

`func (o *CompanyProfileType) SetTerritory(v string)`

SetTerritory sets Territory field to given value.

### HasTerritory

`func (o *CompanyProfileType) HasTerritory() bool`

HasTerritory returns a boolean if a field has been set.

### GetTraceCode

`func (o *CompanyProfileType) GetTraceCode() string`

GetTraceCode returns the TraceCode field if non-nil, zero value otherwise.

### GetTraceCodeOk

`func (o *CompanyProfileType) GetTraceCodeOk() (*string, bool)`

GetTraceCodeOk returns a tuple with the TraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceCode

`func (o *CompanyProfileType) SetTraceCode(v string)`

SetTraceCode sets TraceCode field to given value.

### HasTraceCode

`func (o *CompanyProfileType) HasTraceCode() bool`

HasTraceCode returns a boolean if a field has been set.

### GetOwnerCode

`func (o *CompanyProfileType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *CompanyProfileType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *CompanyProfileType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *CompanyProfileType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetInfluenceCode

`func (o *CompanyProfileType) GetInfluenceCode() string`

GetInfluenceCode returns the InfluenceCode field if non-nil, zero value otherwise.

### GetInfluenceCodeOk

`func (o *CompanyProfileType) GetInfluenceCodeOk() (*string, bool)`

GetInfluenceCodeOk returns a tuple with the InfluenceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfluenceCode

`func (o *CompanyProfileType) SetInfluenceCode(v string)`

SetInfluenceCode sets InfluenceCode field to given value.

### HasInfluenceCode

`func (o *CompanyProfileType) HasInfluenceCode() bool`

HasInfluenceCode returns a boolean if a field has been set.

### GetTelephones

`func (o *CompanyProfileType) GetTelephones() CompanyProfileTypeTelephones`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *CompanyProfileType) GetTelephonesOk() (*CompanyProfileTypeTelephones, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *CompanyProfileType) SetTelephones(v CompanyProfileTypeTelephones)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *CompanyProfileType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetEmails

`func (o *CompanyProfileType) GetEmails() CompanyProfileTypeEmails`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *CompanyProfileType) GetEmailsOk() (*CompanyProfileTypeEmails, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *CompanyProfileType) SetEmails(v CompanyProfileTypeEmails)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *CompanyProfileType) HasEmails() bool`

HasEmails returns a boolean if a field has been set.

### GetURLs

`func (o *CompanyProfileType) GetURLs() CompanyProfileTypeURLs`

GetURLs returns the URLs field if non-nil, zero value otherwise.

### GetURLsOk

`func (o *CompanyProfileType) GetURLsOk() (*CompanyProfileTypeURLs, bool)`

GetURLsOk returns a tuple with the URLs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLs

`func (o *CompanyProfileType) SetURLs(v CompanyProfileTypeURLs)`

SetURLs sets URLs field to given value.

### HasURLs

`func (o *CompanyProfileType) HasURLs() bool`

HasURLs returns a boolean if a field has been set.

### GetComments

`func (o *CompanyProfileType) GetComments() CompanyProfileTypeComments`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *CompanyProfileType) GetCommentsOk() (*CompanyProfileTypeComments, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *CompanyProfileType) SetComments(v CompanyProfileTypeComments)`

SetComments sets Comments field to given value.

### HasComments

`func (o *CompanyProfileType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetProfileMemberships

`func (o *CompanyProfileType) GetProfileMemberships() CompanyProfileTypeProfileMemberships`

GetProfileMemberships returns the ProfileMemberships field if non-nil, zero value otherwise.

### GetProfileMembershipsOk

`func (o *CompanyProfileType) GetProfileMembershipsOk() (*CompanyProfileTypeProfileMemberships, bool)`

GetProfileMembershipsOk returns a tuple with the ProfileMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMemberships

`func (o *CompanyProfileType) SetProfileMemberships(v CompanyProfileTypeProfileMemberships)`

SetProfileMemberships sets ProfileMemberships field to given value.

### HasProfileMemberships

`func (o *CompanyProfileType) HasProfileMemberships() bool`

HasProfileMemberships returns a boolean if a field has been set.

### GetPreferenceCollection

`func (o *CompanyProfileType) GetPreferenceCollection() CompanyProfileTypePreferenceCollection`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *CompanyProfileType) GetPreferenceCollectionOk() (*CompanyProfileTypePreferenceCollection, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *CompanyProfileType) SetPreferenceCollection(v CompanyProfileTypePreferenceCollection)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *CompanyProfileType) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetKeywords

`func (o *CompanyProfileType) GetKeywords() CompanyProfileTypeKeywords`

GetKeywords returns the Keywords field if non-nil, zero value otherwise.

### GetKeywordsOk

`func (o *CompanyProfileType) GetKeywordsOk() (*CompanyProfileTypeKeywords, bool)`

GetKeywordsOk returns a tuple with the Keywords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywords

`func (o *CompanyProfileType) SetKeywords(v CompanyProfileTypeKeywords)`

SetKeywords sets Keywords field to given value.

### HasKeywords

`func (o *CompanyProfileType) HasKeywords() bool`

HasKeywords returns a boolean if a field has been set.

### GetNegotiatedRates

`func (o *CompanyProfileType) GetNegotiatedRates() CompanyProfileTypeNegotiatedRates`

GetNegotiatedRates returns the NegotiatedRates field if non-nil, zero value otherwise.

### GetNegotiatedRatesOk

`func (o *CompanyProfileType) GetNegotiatedRatesOk() (*CompanyProfileTypeNegotiatedRates, bool)`

GetNegotiatedRatesOk returns a tuple with the NegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRates

`func (o *CompanyProfileType) SetNegotiatedRates(v CompanyProfileTypeNegotiatedRates)`

SetNegotiatedRates sets NegotiatedRates field to given value.

### HasNegotiatedRates

`func (o *CompanyProfileType) HasNegotiatedRates() bool`

HasNegotiatedRates returns a boolean if a field has been set.

### GetGdsNegotiatedRates

`func (o *CompanyProfileType) GetGdsNegotiatedRates() CompanyProfileTypeGdsNegotiatedRates`

GetGdsNegotiatedRates returns the GdsNegotiatedRates field if non-nil, zero value otherwise.

### GetGdsNegotiatedRatesOk

`func (o *CompanyProfileType) GetGdsNegotiatedRatesOk() (*CompanyProfileTypeGdsNegotiatedRates, bool)`

GetGdsNegotiatedRatesOk returns a tuple with the GdsNegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGdsNegotiatedRates

`func (o *CompanyProfileType) SetGdsNegotiatedRates(v CompanyProfileTypeGdsNegotiatedRates)`

SetGdsNegotiatedRates sets GdsNegotiatedRates field to given value.

### HasGdsNegotiatedRates

`func (o *CompanyProfileType) HasGdsNegotiatedRates() bool`

HasGdsNegotiatedRates returns a boolean if a field has been set.

### GetProfileIndicators

`func (o *CompanyProfileType) GetProfileIndicators() []IndicatorType`

GetProfileIndicators returns the ProfileIndicators field if non-nil, zero value otherwise.

### GetProfileIndicatorsOk

`func (o *CompanyProfileType) GetProfileIndicatorsOk() (*[]IndicatorType, bool)`

GetProfileIndicatorsOk returns a tuple with the ProfileIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIndicators

`func (o *CompanyProfileType) SetProfileIndicators(v []IndicatorType)`

SetProfileIndicators sets ProfileIndicators field to given value.

### HasProfileIndicators

`func (o *CompanyProfileType) HasProfileIndicators() bool`

HasProfileIndicators returns a boolean if a field has been set.

### GetRelationships

`func (o *CompanyProfileType) GetRelationships() CompanyProfileTypeRelationships`

GetRelationships returns the Relationships field if non-nil, zero value otherwise.

### GetRelationshipsOk

`func (o *CompanyProfileType) GetRelationshipsOk() (*CompanyProfileTypeRelationships, bool)`

GetRelationshipsOk returns a tuple with the Relationships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationships

`func (o *CompanyProfileType) SetRelationships(v CompanyProfileTypeRelationships)`

SetRelationships sets Relationships field to given value.

### HasRelationships

`func (o *CompanyProfileType) HasRelationships() bool`

HasRelationships returns a boolean if a field has been set.

### GetLastStayInfo

`func (o *CompanyProfileType) GetLastStayInfo() LastStayInfoType`

GetLastStayInfo returns the LastStayInfo field if non-nil, zero value otherwise.

### GetLastStayInfoOk

`func (o *CompanyProfileType) GetLastStayInfoOk() (*LastStayInfoType, bool)`

GetLastStayInfoOk returns a tuple with the LastStayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayInfo

`func (o *CompanyProfileType) SetLastStayInfo(v LastStayInfoType)`

SetLastStayInfo sets LastStayInfo field to given value.

### HasLastStayInfo

`func (o *CompanyProfileType) HasLastStayInfo() bool`

HasLastStayInfo returns a boolean if a field has been set.

### GetProfileAccessType

`func (o *CompanyProfileType) GetProfileAccessType() ProfileAccessType`

GetProfileAccessType returns the ProfileAccessType field if non-nil, zero value otherwise.

### GetProfileAccessTypeOk

`func (o *CompanyProfileType) GetProfileAccessTypeOk() (*ProfileAccessType, bool)`

GetProfileAccessTypeOk returns a tuple with the ProfileAccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAccessType

`func (o *CompanyProfileType) SetProfileAccessType(v ProfileAccessType)`

SetProfileAccessType sets ProfileAccessType field to given value.

### HasProfileAccessType

`func (o *CompanyProfileType) HasProfileAccessType() bool`

HasProfileAccessType returns a boolean if a field has been set.

### GetProfileRestrictions

`func (o *CompanyProfileType) GetProfileRestrictions() ProfileRestrictions`

GetProfileRestrictions returns the ProfileRestrictions field if non-nil, zero value otherwise.

### GetProfileRestrictionsOk

`func (o *CompanyProfileType) GetProfileRestrictionsOk() (*ProfileRestrictions, bool)`

GetProfileRestrictionsOk returns a tuple with the ProfileRestrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileRestrictions

`func (o *CompanyProfileType) SetProfileRestrictions(v ProfileRestrictions)`

SetProfileRestrictions sets ProfileRestrictions field to given value.

### HasProfileRestrictions

`func (o *CompanyProfileType) HasProfileRestrictions() bool`

HasProfileRestrictions returns a boolean if a field has been set.

### GetMailingActions

`func (o *CompanyProfileType) GetMailingActions() MailingActionsType`

GetMailingActions returns the MailingActions field if non-nil, zero value otherwise.

### GetMailingActionsOk

`func (o *CompanyProfileType) GetMailingActionsOk() (*MailingActionsType, bool)`

GetMailingActionsOk returns a tuple with the MailingActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailingActions

`func (o *CompanyProfileType) SetMailingActions(v MailingActionsType)`

SetMailingActions sets MailingActions field to given value.

### HasMailingActions

`func (o *CompanyProfileType) HasMailingActions() bool`

HasMailingActions returns a boolean if a field has been set.

### GetPrivacyInfo

`func (o *CompanyProfileType) GetPrivacyInfo() PrivacyInfoType`

GetPrivacyInfo returns the PrivacyInfo field if non-nil, zero value otherwise.

### GetPrivacyInfoOk

`func (o *CompanyProfileType) GetPrivacyInfoOk() (*PrivacyInfoType, bool)`

GetPrivacyInfoOk returns a tuple with the PrivacyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivacyInfo

`func (o *CompanyProfileType) SetPrivacyInfo(v PrivacyInfoType)`

SetPrivacyInfo sets PrivacyInfo field to given value.

### HasPrivacyInfo

`func (o *CompanyProfileType) HasPrivacyInfo() bool`

HasPrivacyInfo returns a boolean if a field has been set.

### GetCashiering

`func (o *CompanyProfileType) GetCashiering() ProfileCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *CompanyProfileType) GetCashieringOk() (*ProfileCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *CompanyProfileType) SetCashiering(v ProfileCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *CompanyProfileType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetCommissionInfoList

`func (o *CompanyProfileType) GetCommissionInfoList() []ProfileCommissionType`

GetCommissionInfoList returns the CommissionInfoList field if non-nil, zero value otherwise.

### GetCommissionInfoListOk

`func (o *CompanyProfileType) GetCommissionInfoListOk() (*[]ProfileCommissionType, bool)`

GetCommissionInfoListOk returns a tuple with the CommissionInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionInfoList

`func (o *CompanyProfileType) SetCommissionInfoList(v []ProfileCommissionType)`

SetCommissionInfoList sets CommissionInfoList field to given value.

### HasCommissionInfoList

`func (o *CompanyProfileType) HasCommissionInfoList() bool`

HasCommissionInfoList returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *CompanyProfileType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *CompanyProfileType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *CompanyProfileType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *CompanyProfileType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetWebUserAccounts

`func (o *CompanyProfileType) GetWebUserAccounts() []WebUserAccountType`

GetWebUserAccounts returns the WebUserAccounts field if non-nil, zero value otherwise.

### GetWebUserAccountsOk

`func (o *CompanyProfileType) GetWebUserAccountsOk() (*[]WebUserAccountType, bool)`

GetWebUserAccountsOk returns a tuple with the WebUserAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebUserAccounts

`func (o *CompanyProfileType) SetWebUserAccounts(v []WebUserAccountType)`

SetWebUserAccounts sets WebUserAccounts field to given value.

### HasWebUserAccounts

`func (o *CompanyProfileType) HasWebUserAccounts() bool`

HasWebUserAccounts returns a boolean if a field has been set.

### GetTaxInfo

`func (o *CompanyProfileType) GetTaxInfo() ProfileTaxInfoType`

GetTaxInfo returns the TaxInfo field if non-nil, zero value otherwise.

### GetTaxInfoOk

`func (o *CompanyProfileType) GetTaxInfoOk() (*ProfileTaxInfoType, bool)`

GetTaxInfoOk returns a tuple with the TaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInfo

`func (o *CompanyProfileType) SetTaxInfo(v ProfileTaxInfoType)`

SetTaxInfo sets TaxInfo field to given value.

### HasTaxInfo

`func (o *CompanyProfileType) HasTaxInfo() bool`

HasTaxInfo returns a boolean if a field has been set.

### GetSalesInfo

`func (o *CompanyProfileType) GetSalesInfo() SalesInfoType`

GetSalesInfo returns the SalesInfo field if non-nil, zero value otherwise.

### GetSalesInfoOk

`func (o *CompanyProfileType) GetSalesInfoOk() (*SalesInfoType, bool)`

GetSalesInfoOk returns a tuple with the SalesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesInfo

`func (o *CompanyProfileType) SetSalesInfo(v SalesInfoType)`

SetSalesInfo sets SalesInfo field to given value.

### HasSalesInfo

`func (o *CompanyProfileType) HasSalesInfo() bool`

HasSalesInfo returns a boolean if a field has been set.

### GetECertificates

`func (o *CompanyProfileType) GetECertificates() []ECertificateType`

GetECertificates returns the ECertificates field if non-nil, zero value otherwise.

### GetECertificatesOk

`func (o *CompanyProfileType) GetECertificatesOk() (*[]ECertificateType, bool)`

GetECertificatesOk returns a tuple with the ECertificates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificates

`func (o *CompanyProfileType) SetECertificates(v []ECertificateType)`

SetECertificates sets ECertificates field to given value.

### HasECertificates

`func (o *CompanyProfileType) HasECertificates() bool`

HasECertificates returns a boolean if a field has been set.

### GetSubscriptions

`func (o *CompanyProfileType) GetSubscriptions() []ProfileSubscriptionType`

GetSubscriptions returns the Subscriptions field if non-nil, zero value otherwise.

### GetSubscriptionsOk

`func (o *CompanyProfileType) GetSubscriptionsOk() (*[]ProfileSubscriptionType, bool)`

GetSubscriptionsOk returns a tuple with the Subscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptions

`func (o *CompanyProfileType) SetSubscriptions(v []ProfileSubscriptionType)`

SetSubscriptions sets Subscriptions field to given value.

### HasSubscriptions

`func (o *CompanyProfileType) HasSubscriptions() bool`

HasSubscriptions returns a boolean if a field has been set.

### GetLocalizationGuestType

`func (o *CompanyProfileType) GetLocalizationGuestType() string`

GetLocalizationGuestType returns the LocalizationGuestType field if non-nil, zero value otherwise.

### GetLocalizationGuestTypeOk

`func (o *CompanyProfileType) GetLocalizationGuestTypeOk() (*string, bool)`

GetLocalizationGuestTypeOk returns a tuple with the LocalizationGuestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizationGuestType

`func (o *CompanyProfileType) SetLocalizationGuestType(v string)`

SetLocalizationGuestType sets LocalizationGuestType field to given value.

### HasLocalizationGuestType

`func (o *CompanyProfileType) HasLocalizationGuestType() bool`

HasLocalizationGuestType returns a boolean if a field has been set.

### GetEligibleForFiscalFolio

`func (o *CompanyProfileType) GetEligibleForFiscalFolio() string`

GetEligibleForFiscalFolio returns the EligibleForFiscalFolio field if non-nil, zero value otherwise.

### GetEligibleForFiscalFolioOk

`func (o *CompanyProfileType) GetEligibleForFiscalFolioOk() (*string, bool)`

GetEligibleForFiscalFolioOk returns a tuple with the EligibleForFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEligibleForFiscalFolio

`func (o *CompanyProfileType) SetEligibleForFiscalFolio(v string)`

SetEligibleForFiscalFolio sets EligibleForFiscalFolio field to given value.

### HasEligibleForFiscalFolio

`func (o *CompanyProfileType) HasEligibleForFiscalFolio() bool`

HasEligibleForFiscalFolio returns a boolean if a field has been set.

### GetProfileType

`func (o *CompanyProfileType) GetProfileType() CompanyProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *CompanyProfileType) GetProfileTypeOk() (*CompanyProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *CompanyProfileType) SetProfileType(v CompanyProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *CompanyProfileType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetStatusCode

`func (o *CompanyProfileType) GetStatusCode() ProfileStatusType`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *CompanyProfileType) GetStatusCodeOk() (*ProfileStatusType, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *CompanyProfileType) SetStatusCode(v ProfileStatusType)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *CompanyProfileType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetRegisteredProperty

`func (o *CompanyProfileType) GetRegisteredProperty() string`

GetRegisteredProperty returns the RegisteredProperty field if non-nil, zero value otherwise.

### GetRegisteredPropertyOk

`func (o *CompanyProfileType) GetRegisteredPropertyOk() (*string, bool)`

GetRegisteredPropertyOk returns a tuple with the RegisteredProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisteredProperty

`func (o *CompanyProfileType) SetRegisteredProperty(v string)`

SetRegisteredProperty sets RegisteredProperty field to given value.

### HasRegisteredProperty

`func (o *CompanyProfileType) HasRegisteredProperty() bool`

HasRegisteredProperty returns a boolean if a field has been set.

### GetRequestForHotel

`func (o *CompanyProfileType) GetRequestForHotel() string`

GetRequestForHotel returns the RequestForHotel field if non-nil, zero value otherwise.

### GetRequestForHotelOk

`func (o *CompanyProfileType) GetRequestForHotelOk() (*string, bool)`

GetRequestForHotelOk returns a tuple with the RequestForHotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestForHotel

`func (o *CompanyProfileType) SetRequestForHotel(v string)`

SetRequestForHotel sets RequestForHotel field to given value.

### HasRequestForHotel

`func (o *CompanyProfileType) HasRequestForHotel() bool`

HasRequestForHotel returns a boolean if a field has been set.

### GetProtectedBy

`func (o *CompanyProfileType) GetProtectedBy() string`

GetProtectedBy returns the ProtectedBy field if non-nil, zero value otherwise.

### GetProtectedByOk

`func (o *CompanyProfileType) GetProtectedByOk() (*string, bool)`

GetProtectedByOk returns a tuple with the ProtectedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectedBy

`func (o *CompanyProfileType) SetProtectedBy(v string)`

SetProtectedBy sets ProtectedBy field to given value.

### HasProtectedBy

`func (o *CompanyProfileType) HasProtectedBy() bool`

HasProtectedBy returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *CompanyProfileType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *CompanyProfileType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *CompanyProfileType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *CompanyProfileType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *CompanyProfileType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *CompanyProfileType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *CompanyProfileType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *CompanyProfileType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *CompanyProfileType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *CompanyProfileType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *CompanyProfileType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *CompanyProfileType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *CompanyProfileType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *CompanyProfileType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *CompanyProfileType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *CompanyProfileType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *CompanyProfileType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *CompanyProfileType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *CompanyProfileType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *CompanyProfileType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetMarkForHistory

`func (o *CompanyProfileType) GetMarkForHistory() bool`

GetMarkForHistory returns the MarkForHistory field if non-nil, zero value otherwise.

### GetMarkForHistoryOk

`func (o *CompanyProfileType) GetMarkForHistoryOk() (*bool, bool)`

GetMarkForHistoryOk returns a tuple with the MarkForHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkForHistory

`func (o *CompanyProfileType) SetMarkForHistory(v bool)`

SetMarkForHistory sets MarkForHistory field to given value.

### HasMarkForHistory

`func (o *CompanyProfileType) HasMarkForHistory() bool`

HasMarkForHistory returns a boolean if a field has been set.

### GetHasCommission

`func (o *CompanyProfileType) GetHasCommission() bool`

GetHasCommission returns the HasCommission field if non-nil, zero value otherwise.

### GetHasCommissionOk

`func (o *CompanyProfileType) GetHasCommissionOk() (*bool, bool)`

GetHasCommissionOk returns a tuple with the HasCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasCommission

`func (o *CompanyProfileType) SetHasCommission(v bool)`

SetHasCommission sets HasCommission field to given value.

### HasHasCommission

`func (o *CompanyProfileType) HasHasCommission() bool`

HasHasCommission returns a boolean if a field has been set.

### GetInheritedNegRates

`func (o *CompanyProfileType) GetInheritedNegRates() bool`

GetInheritedNegRates returns the InheritedNegRates field if non-nil, zero value otherwise.

### GetInheritedNegRatesOk

`func (o *CompanyProfileType) GetInheritedNegRatesOk() (*bool, bool)`

GetInheritedNegRatesOk returns a tuple with the InheritedNegRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritedNegRates

`func (o *CompanyProfileType) SetInheritedNegRates(v bool)`

SetInheritedNegRates sets InheritedNegRates field to given value.

### HasInheritedNegRates

`func (o *CompanyProfileType) HasInheritedNegRates() bool`

HasInheritedNegRates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


