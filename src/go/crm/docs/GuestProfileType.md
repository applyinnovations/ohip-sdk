# GuestProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addresses** | Pointer to [**CompanyProfileTypeAddresses**](CompanyProfileTypeAddresses.md) |  | [optional] 
**Cashiering** | Pointer to [**ProfileCashieringType**](ProfileCashieringType.md) |  | [optional] 
**Comments** | Pointer to [**CompanyProfileTypeComments**](CompanyProfileTypeComments.md) |  | [optional] 
**CommissionInfoList** | Pointer to [**[]ProfileCommissionType**](ProfileCommissionType.md) | Contains commission related details for the profile. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Customer** | Pointer to [**CustomerType**](CustomerType.md) |  | [optional] 
**ECertificates** | Pointer to [**ECertificatesType**](ECertificatesType.md) |  | [optional] 
**EligibleForFiscalFolio** | Pointer to **string** | Eligible for Fiscal Folio/Payload generation. | [optional] 
**Emails** | Pointer to [**CompanyProfileTypeEmails**](CompanyProfileTypeEmails.md) |  | [optional] 
**GdsNegotiatedRates** | Pointer to [**CompanyProfileTypeGdsNegotiatedRates**](CompanyProfileTypeGdsNegotiatedRates.md) |  | [optional] 
**HasCommission** | Pointer to **bool** | Populates true if the profile has commission configured false otherwise. | [optional] 
**InfluenceCode** | Pointer to **string** | Influence Code associated to the profile. | [optional] 
**InheritedNegRates** | Pointer to **bool** | Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. | [optional] 
**Keywords** | Pointer to [**CompanyProfileTypeKeywords**](CompanyProfileTypeKeywords.md) |  | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastStayInfo** | Pointer to [**LastStayInfoType**](LastStayInfoType.md) |  | [optional] 
**LocalizationGuestType** | Pointer to **string** | Localization Guest Type associated to the profile. | [optional] 
**MailingActions** | Pointer to [**MailingActionsType**](MailingActionsType.md) |  | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this profile as recently accessed. | [optional] 
**MarkForHistory** | Pointer to **bool** | \&quot;true\&quot; setting marks the profile to be kept from being purged, once the profile is marked inactive. | [optional] 
**NegotiatedRates** | Pointer to [**CompanyProfileTypeNegotiatedRates**](CompanyProfileTypeNegotiatedRates.md) |  | [optional] 
**OwnerCode** | Pointer to **string** | Owner Code associated to the profile. | [optional] 
**PreferenceCollection** | Pointer to [**CompanyProfileTypePreferenceCollection**](CompanyProfileTypePreferenceCollection.md) |  | [optional] 
**PrivacyInfo** | Pointer to [**PrivacyInfoType**](PrivacyInfoType.md) |  | [optional] 
**ProfileAccessType** | Pointer to [**ProfileAccessType**](ProfileAccessType.md) |  | [optional] 
**ProfileImage** | Pointer to [**ImageSetType**](ImageSetType.md) |  | [optional] 
**ProfileIndicators** | Pointer to [**IndicatorsType**](IndicatorsType.md) |  | [optional] 
**ProfileMemberships** | Pointer to [**CompanyProfileTypeProfileMemberships**](CompanyProfileTypeProfileMemberships.md) |  | [optional] 
**ProfileRestrictions** | Pointer to [**ProfileRestrictions**](ProfileRestrictions.md) |  | [optional] 
**ProfileType** | Pointer to [**GuestProfileTypeType**](GuestProfileTypeType.md) |  | [optional] 
**ProtectedBy** | Pointer to **string** | What level this profile is protected. | [optional] 
**RegisteredProperty** | Pointer to **string** | Hotel which this profile is registered with. This attribute is not used for configuration. | [optional] 
**Relationships** | Pointer to [**CompanyProfileTypeRelationships**](CompanyProfileTypeRelationships.md) |  | [optional] 
**RequestForHotel** | Pointer to **string** | Hotel which this profile is to be registered. This attribute is only used during creation of profile. | [optional] 
**SalesInfo** | Pointer to [**SalesInfoType**](SalesInfoType.md) |  | [optional] 
**StatusCode** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**Subscriptions** | Pointer to [**ProfileSubscriptionListType**](ProfileSubscriptionListType.md) |  | [optional] 
**TaxInfo** | Pointer to [**ProfileTaxInfoType**](ProfileTaxInfoType.md) |  | [optional] 
**Telephones** | Pointer to [**CompanyProfileTypeTelephones**](CompanyProfileTypeTelephones.md) |  | [optional] 
**TraceCode** | Pointer to **string** | Trace Code associated to the profile. | [optional] 
**URLs** | Pointer to [**CompanyProfileTypeURLs**](CompanyProfileTypeURLs.md) |  | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**WebUserAccounts** | Pointer to [**WebUserAccountsType**](WebUserAccountsType.md) |  | [optional] 

## Methods

### NewGuestProfileType

`func NewGuestProfileType() *GuestProfileType`

NewGuestProfileType instantiates a new GuestProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestProfileTypeWithDefaults

`func NewGuestProfileTypeWithDefaults() *GuestProfileType`

NewGuestProfileTypeWithDefaults instantiates a new GuestProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddresses

`func (o *GuestProfileType) GetAddresses() CompanyProfileTypeAddresses`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *GuestProfileType) GetAddressesOk() (*CompanyProfileTypeAddresses, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *GuestProfileType) SetAddresses(v CompanyProfileTypeAddresses)`

SetAddresses sets Addresses field to given value.

### HasAddresses

`func (o *GuestProfileType) HasAddresses() bool`

HasAddresses returns a boolean if a field has been set.

### GetCashiering

`func (o *GuestProfileType) GetCashiering() ProfileCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *GuestProfileType) GetCashieringOk() (*ProfileCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *GuestProfileType) SetCashiering(v ProfileCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *GuestProfileType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetComments

`func (o *GuestProfileType) GetComments() CompanyProfileTypeComments`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *GuestProfileType) GetCommentsOk() (*CompanyProfileTypeComments, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *GuestProfileType) SetComments(v CompanyProfileTypeComments)`

SetComments sets Comments field to given value.

### HasComments

`func (o *GuestProfileType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCommissionInfoList

`func (o *GuestProfileType) GetCommissionInfoList() []ProfileCommissionType`

GetCommissionInfoList returns the CommissionInfoList field if non-nil, zero value otherwise.

### GetCommissionInfoListOk

`func (o *GuestProfileType) GetCommissionInfoListOk() (*[]ProfileCommissionType, bool)`

GetCommissionInfoListOk returns a tuple with the CommissionInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionInfoList

`func (o *GuestProfileType) SetCommissionInfoList(v []ProfileCommissionType)`

SetCommissionInfoList sets CommissionInfoList field to given value.

### HasCommissionInfoList

`func (o *GuestProfileType) HasCommissionInfoList() bool`

HasCommissionInfoList returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *GuestProfileType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *GuestProfileType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *GuestProfileType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *GuestProfileType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *GuestProfileType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *GuestProfileType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *GuestProfileType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *GuestProfileType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetCustomer

`func (o *GuestProfileType) GetCustomer() CustomerType`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *GuestProfileType) GetCustomerOk() (*CustomerType, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *GuestProfileType) SetCustomer(v CustomerType)`

SetCustomer sets Customer field to given value.

### HasCustomer

`func (o *GuestProfileType) HasCustomer() bool`

HasCustomer returns a boolean if a field has been set.

### GetECertificates

`func (o *GuestProfileType) GetECertificates() ECertificatesType`

GetECertificates returns the ECertificates field if non-nil, zero value otherwise.

### GetECertificatesOk

`func (o *GuestProfileType) GetECertificatesOk() (*ECertificatesType, bool)`

GetECertificatesOk returns a tuple with the ECertificates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificates

`func (o *GuestProfileType) SetECertificates(v ECertificatesType)`

SetECertificates sets ECertificates field to given value.

### HasECertificates

`func (o *GuestProfileType) HasECertificates() bool`

HasECertificates returns a boolean if a field has been set.

### GetEligibleForFiscalFolio

`func (o *GuestProfileType) GetEligibleForFiscalFolio() string`

GetEligibleForFiscalFolio returns the EligibleForFiscalFolio field if non-nil, zero value otherwise.

### GetEligibleForFiscalFolioOk

`func (o *GuestProfileType) GetEligibleForFiscalFolioOk() (*string, bool)`

GetEligibleForFiscalFolioOk returns a tuple with the EligibleForFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEligibleForFiscalFolio

`func (o *GuestProfileType) SetEligibleForFiscalFolio(v string)`

SetEligibleForFiscalFolio sets EligibleForFiscalFolio field to given value.

### HasEligibleForFiscalFolio

`func (o *GuestProfileType) HasEligibleForFiscalFolio() bool`

HasEligibleForFiscalFolio returns a boolean if a field has been set.

### GetEmails

`func (o *GuestProfileType) GetEmails() CompanyProfileTypeEmails`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *GuestProfileType) GetEmailsOk() (*CompanyProfileTypeEmails, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *GuestProfileType) SetEmails(v CompanyProfileTypeEmails)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *GuestProfileType) HasEmails() bool`

HasEmails returns a boolean if a field has been set.

### GetGdsNegotiatedRates

`func (o *GuestProfileType) GetGdsNegotiatedRates() CompanyProfileTypeGdsNegotiatedRates`

GetGdsNegotiatedRates returns the GdsNegotiatedRates field if non-nil, zero value otherwise.

### GetGdsNegotiatedRatesOk

`func (o *GuestProfileType) GetGdsNegotiatedRatesOk() (*CompanyProfileTypeGdsNegotiatedRates, bool)`

GetGdsNegotiatedRatesOk returns a tuple with the GdsNegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGdsNegotiatedRates

`func (o *GuestProfileType) SetGdsNegotiatedRates(v CompanyProfileTypeGdsNegotiatedRates)`

SetGdsNegotiatedRates sets GdsNegotiatedRates field to given value.

### HasGdsNegotiatedRates

`func (o *GuestProfileType) HasGdsNegotiatedRates() bool`

HasGdsNegotiatedRates returns a boolean if a field has been set.

### GetHasCommission

`func (o *GuestProfileType) GetHasCommission() bool`

GetHasCommission returns the HasCommission field if non-nil, zero value otherwise.

### GetHasCommissionOk

`func (o *GuestProfileType) GetHasCommissionOk() (*bool, bool)`

GetHasCommissionOk returns a tuple with the HasCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasCommission

`func (o *GuestProfileType) SetHasCommission(v bool)`

SetHasCommission sets HasCommission field to given value.

### HasHasCommission

`func (o *GuestProfileType) HasHasCommission() bool`

HasHasCommission returns a boolean if a field has been set.

### GetInfluenceCode

`func (o *GuestProfileType) GetInfluenceCode() string`

GetInfluenceCode returns the InfluenceCode field if non-nil, zero value otherwise.

### GetInfluenceCodeOk

`func (o *GuestProfileType) GetInfluenceCodeOk() (*string, bool)`

GetInfluenceCodeOk returns a tuple with the InfluenceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfluenceCode

`func (o *GuestProfileType) SetInfluenceCode(v string)`

SetInfluenceCode sets InfluenceCode field to given value.

### HasInfluenceCode

`func (o *GuestProfileType) HasInfluenceCode() bool`

HasInfluenceCode returns a boolean if a field has been set.

### GetInheritedNegRates

`func (o *GuestProfileType) GetInheritedNegRates() bool`

GetInheritedNegRates returns the InheritedNegRates field if non-nil, zero value otherwise.

### GetInheritedNegRatesOk

`func (o *GuestProfileType) GetInheritedNegRatesOk() (*bool, bool)`

GetInheritedNegRatesOk returns a tuple with the InheritedNegRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritedNegRates

`func (o *GuestProfileType) SetInheritedNegRates(v bool)`

SetInheritedNegRates sets InheritedNegRates field to given value.

### HasInheritedNegRates

`func (o *GuestProfileType) HasInheritedNegRates() bool`

HasInheritedNegRates returns a boolean if a field has been set.

### GetKeywords

`func (o *GuestProfileType) GetKeywords() CompanyProfileTypeKeywords`

GetKeywords returns the Keywords field if non-nil, zero value otherwise.

### GetKeywordsOk

`func (o *GuestProfileType) GetKeywordsOk() (*CompanyProfileTypeKeywords, bool)`

GetKeywordsOk returns a tuple with the Keywords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywords

`func (o *GuestProfileType) SetKeywords(v CompanyProfileTypeKeywords)`

SetKeywords sets Keywords field to given value.

### HasKeywords

`func (o *GuestProfileType) HasKeywords() bool`

HasKeywords returns a boolean if a field has been set.

### GetLastModifierId

`func (o *GuestProfileType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *GuestProfileType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *GuestProfileType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *GuestProfileType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *GuestProfileType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *GuestProfileType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *GuestProfileType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *GuestProfileType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastStayInfo

`func (o *GuestProfileType) GetLastStayInfo() LastStayInfoType`

GetLastStayInfo returns the LastStayInfo field if non-nil, zero value otherwise.

### GetLastStayInfoOk

`func (o *GuestProfileType) GetLastStayInfoOk() (*LastStayInfoType, bool)`

GetLastStayInfoOk returns a tuple with the LastStayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayInfo

`func (o *GuestProfileType) SetLastStayInfo(v LastStayInfoType)`

SetLastStayInfo sets LastStayInfo field to given value.

### HasLastStayInfo

`func (o *GuestProfileType) HasLastStayInfo() bool`

HasLastStayInfo returns a boolean if a field has been set.

### GetLocalizationGuestType

`func (o *GuestProfileType) GetLocalizationGuestType() string`

GetLocalizationGuestType returns the LocalizationGuestType field if non-nil, zero value otherwise.

### GetLocalizationGuestTypeOk

`func (o *GuestProfileType) GetLocalizationGuestTypeOk() (*string, bool)`

GetLocalizationGuestTypeOk returns a tuple with the LocalizationGuestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizationGuestType

`func (o *GuestProfileType) SetLocalizationGuestType(v string)`

SetLocalizationGuestType sets LocalizationGuestType field to given value.

### HasLocalizationGuestType

`func (o *GuestProfileType) HasLocalizationGuestType() bool`

HasLocalizationGuestType returns a boolean if a field has been set.

### GetMailingActions

`func (o *GuestProfileType) GetMailingActions() MailingActionsType`

GetMailingActions returns the MailingActions field if non-nil, zero value otherwise.

### GetMailingActionsOk

`func (o *GuestProfileType) GetMailingActionsOk() (*MailingActionsType, bool)`

GetMailingActionsOk returns a tuple with the MailingActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailingActions

`func (o *GuestProfileType) SetMailingActions(v MailingActionsType)`

SetMailingActions sets MailingActions field to given value.

### HasMailingActions

`func (o *GuestProfileType) HasMailingActions() bool`

HasMailingActions returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *GuestProfileType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *GuestProfileType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *GuestProfileType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *GuestProfileType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetMarkForHistory

`func (o *GuestProfileType) GetMarkForHistory() bool`

GetMarkForHistory returns the MarkForHistory field if non-nil, zero value otherwise.

### GetMarkForHistoryOk

`func (o *GuestProfileType) GetMarkForHistoryOk() (*bool, bool)`

GetMarkForHistoryOk returns a tuple with the MarkForHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkForHistory

`func (o *GuestProfileType) SetMarkForHistory(v bool)`

SetMarkForHistory sets MarkForHistory field to given value.

### HasMarkForHistory

`func (o *GuestProfileType) HasMarkForHistory() bool`

HasMarkForHistory returns a boolean if a field has been set.

### GetNegotiatedRates

`func (o *GuestProfileType) GetNegotiatedRates() CompanyProfileTypeNegotiatedRates`

GetNegotiatedRates returns the NegotiatedRates field if non-nil, zero value otherwise.

### GetNegotiatedRatesOk

`func (o *GuestProfileType) GetNegotiatedRatesOk() (*CompanyProfileTypeNegotiatedRates, bool)`

GetNegotiatedRatesOk returns a tuple with the NegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRates

`func (o *GuestProfileType) SetNegotiatedRates(v CompanyProfileTypeNegotiatedRates)`

SetNegotiatedRates sets NegotiatedRates field to given value.

### HasNegotiatedRates

`func (o *GuestProfileType) HasNegotiatedRates() bool`

HasNegotiatedRates returns a boolean if a field has been set.

### GetOwnerCode

`func (o *GuestProfileType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *GuestProfileType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *GuestProfileType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *GuestProfileType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetPreferenceCollection

`func (o *GuestProfileType) GetPreferenceCollection() CompanyProfileTypePreferenceCollection`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *GuestProfileType) GetPreferenceCollectionOk() (*CompanyProfileTypePreferenceCollection, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *GuestProfileType) SetPreferenceCollection(v CompanyProfileTypePreferenceCollection)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *GuestProfileType) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetPrivacyInfo

`func (o *GuestProfileType) GetPrivacyInfo() PrivacyInfoType`

GetPrivacyInfo returns the PrivacyInfo field if non-nil, zero value otherwise.

### GetPrivacyInfoOk

`func (o *GuestProfileType) GetPrivacyInfoOk() (*PrivacyInfoType, bool)`

GetPrivacyInfoOk returns a tuple with the PrivacyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivacyInfo

`func (o *GuestProfileType) SetPrivacyInfo(v PrivacyInfoType)`

SetPrivacyInfo sets PrivacyInfo field to given value.

### HasPrivacyInfo

`func (o *GuestProfileType) HasPrivacyInfo() bool`

HasPrivacyInfo returns a boolean if a field has been set.

### GetProfileAccessType

`func (o *GuestProfileType) GetProfileAccessType() ProfileAccessType`

GetProfileAccessType returns the ProfileAccessType field if non-nil, zero value otherwise.

### GetProfileAccessTypeOk

`func (o *GuestProfileType) GetProfileAccessTypeOk() (*ProfileAccessType, bool)`

GetProfileAccessTypeOk returns a tuple with the ProfileAccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAccessType

`func (o *GuestProfileType) SetProfileAccessType(v ProfileAccessType)`

SetProfileAccessType sets ProfileAccessType field to given value.

### HasProfileAccessType

`func (o *GuestProfileType) HasProfileAccessType() bool`

HasProfileAccessType returns a boolean if a field has been set.

### GetProfileImage

`func (o *GuestProfileType) GetProfileImage() ImageSetType`

GetProfileImage returns the ProfileImage field if non-nil, zero value otherwise.

### GetProfileImageOk

`func (o *GuestProfileType) GetProfileImageOk() (*ImageSetType, bool)`

GetProfileImageOk returns a tuple with the ProfileImage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileImage

`func (o *GuestProfileType) SetProfileImage(v ImageSetType)`

SetProfileImage sets ProfileImage field to given value.

### HasProfileImage

`func (o *GuestProfileType) HasProfileImage() bool`

HasProfileImage returns a boolean if a field has been set.

### GetProfileIndicators

`func (o *GuestProfileType) GetProfileIndicators() IndicatorsType`

GetProfileIndicators returns the ProfileIndicators field if non-nil, zero value otherwise.

### GetProfileIndicatorsOk

`func (o *GuestProfileType) GetProfileIndicatorsOk() (*IndicatorsType, bool)`

GetProfileIndicatorsOk returns a tuple with the ProfileIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIndicators

`func (o *GuestProfileType) SetProfileIndicators(v IndicatorsType)`

SetProfileIndicators sets ProfileIndicators field to given value.

### HasProfileIndicators

`func (o *GuestProfileType) HasProfileIndicators() bool`

HasProfileIndicators returns a boolean if a field has been set.

### GetProfileMemberships

`func (o *GuestProfileType) GetProfileMemberships() CompanyProfileTypeProfileMemberships`

GetProfileMemberships returns the ProfileMemberships field if non-nil, zero value otherwise.

### GetProfileMembershipsOk

`func (o *GuestProfileType) GetProfileMembershipsOk() (*CompanyProfileTypeProfileMemberships, bool)`

GetProfileMembershipsOk returns a tuple with the ProfileMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMemberships

`func (o *GuestProfileType) SetProfileMemberships(v CompanyProfileTypeProfileMemberships)`

SetProfileMemberships sets ProfileMemberships field to given value.

### HasProfileMemberships

`func (o *GuestProfileType) HasProfileMemberships() bool`

HasProfileMemberships returns a boolean if a field has been set.

### GetProfileRestrictions

`func (o *GuestProfileType) GetProfileRestrictions() ProfileRestrictions`

GetProfileRestrictions returns the ProfileRestrictions field if non-nil, zero value otherwise.

### GetProfileRestrictionsOk

`func (o *GuestProfileType) GetProfileRestrictionsOk() (*ProfileRestrictions, bool)`

GetProfileRestrictionsOk returns a tuple with the ProfileRestrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileRestrictions

`func (o *GuestProfileType) SetProfileRestrictions(v ProfileRestrictions)`

SetProfileRestrictions sets ProfileRestrictions field to given value.

### HasProfileRestrictions

`func (o *GuestProfileType) HasProfileRestrictions() bool`

HasProfileRestrictions returns a boolean if a field has been set.

### GetProfileType

`func (o *GuestProfileType) GetProfileType() GuestProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *GuestProfileType) GetProfileTypeOk() (*GuestProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *GuestProfileType) SetProfileType(v GuestProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *GuestProfileType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetProtectedBy

`func (o *GuestProfileType) GetProtectedBy() string`

GetProtectedBy returns the ProtectedBy field if non-nil, zero value otherwise.

### GetProtectedByOk

`func (o *GuestProfileType) GetProtectedByOk() (*string, bool)`

GetProtectedByOk returns a tuple with the ProtectedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectedBy

`func (o *GuestProfileType) SetProtectedBy(v string)`

SetProtectedBy sets ProtectedBy field to given value.

### HasProtectedBy

`func (o *GuestProfileType) HasProtectedBy() bool`

HasProtectedBy returns a boolean if a field has been set.

### GetRegisteredProperty

`func (o *GuestProfileType) GetRegisteredProperty() string`

GetRegisteredProperty returns the RegisteredProperty field if non-nil, zero value otherwise.

### GetRegisteredPropertyOk

`func (o *GuestProfileType) GetRegisteredPropertyOk() (*string, bool)`

GetRegisteredPropertyOk returns a tuple with the RegisteredProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisteredProperty

`func (o *GuestProfileType) SetRegisteredProperty(v string)`

SetRegisteredProperty sets RegisteredProperty field to given value.

### HasRegisteredProperty

`func (o *GuestProfileType) HasRegisteredProperty() bool`

HasRegisteredProperty returns a boolean if a field has been set.

### GetRelationships

`func (o *GuestProfileType) GetRelationships() CompanyProfileTypeRelationships`

GetRelationships returns the Relationships field if non-nil, zero value otherwise.

### GetRelationshipsOk

`func (o *GuestProfileType) GetRelationshipsOk() (*CompanyProfileTypeRelationships, bool)`

GetRelationshipsOk returns a tuple with the Relationships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationships

`func (o *GuestProfileType) SetRelationships(v CompanyProfileTypeRelationships)`

SetRelationships sets Relationships field to given value.

### HasRelationships

`func (o *GuestProfileType) HasRelationships() bool`

HasRelationships returns a boolean if a field has been set.

### GetRequestForHotel

`func (o *GuestProfileType) GetRequestForHotel() string`

GetRequestForHotel returns the RequestForHotel field if non-nil, zero value otherwise.

### GetRequestForHotelOk

`func (o *GuestProfileType) GetRequestForHotelOk() (*string, bool)`

GetRequestForHotelOk returns a tuple with the RequestForHotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestForHotel

`func (o *GuestProfileType) SetRequestForHotel(v string)`

SetRequestForHotel sets RequestForHotel field to given value.

### HasRequestForHotel

`func (o *GuestProfileType) HasRequestForHotel() bool`

HasRequestForHotel returns a boolean if a field has been set.

### GetSalesInfo

`func (o *GuestProfileType) GetSalesInfo() SalesInfoType`

GetSalesInfo returns the SalesInfo field if non-nil, zero value otherwise.

### GetSalesInfoOk

`func (o *GuestProfileType) GetSalesInfoOk() (*SalesInfoType, bool)`

GetSalesInfoOk returns a tuple with the SalesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesInfo

`func (o *GuestProfileType) SetSalesInfo(v SalesInfoType)`

SetSalesInfo sets SalesInfo field to given value.

### HasSalesInfo

`func (o *GuestProfileType) HasSalesInfo() bool`

HasSalesInfo returns a boolean if a field has been set.

### GetStatusCode

`func (o *GuestProfileType) GetStatusCode() ProfileStatusType`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *GuestProfileType) GetStatusCodeOk() (*ProfileStatusType, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *GuestProfileType) SetStatusCode(v ProfileStatusType)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *GuestProfileType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetSubscriptions

`func (o *GuestProfileType) GetSubscriptions() ProfileSubscriptionListType`

GetSubscriptions returns the Subscriptions field if non-nil, zero value otherwise.

### GetSubscriptionsOk

`func (o *GuestProfileType) GetSubscriptionsOk() (*ProfileSubscriptionListType, bool)`

GetSubscriptionsOk returns a tuple with the Subscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptions

`func (o *GuestProfileType) SetSubscriptions(v ProfileSubscriptionListType)`

SetSubscriptions sets Subscriptions field to given value.

### HasSubscriptions

`func (o *GuestProfileType) HasSubscriptions() bool`

HasSubscriptions returns a boolean if a field has been set.

### GetTaxInfo

`func (o *GuestProfileType) GetTaxInfo() ProfileTaxInfoType`

GetTaxInfo returns the TaxInfo field if non-nil, zero value otherwise.

### GetTaxInfoOk

`func (o *GuestProfileType) GetTaxInfoOk() (*ProfileTaxInfoType, bool)`

GetTaxInfoOk returns a tuple with the TaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInfo

`func (o *GuestProfileType) SetTaxInfo(v ProfileTaxInfoType)`

SetTaxInfo sets TaxInfo field to given value.

### HasTaxInfo

`func (o *GuestProfileType) HasTaxInfo() bool`

HasTaxInfo returns a boolean if a field has been set.

### GetTelephones

`func (o *GuestProfileType) GetTelephones() CompanyProfileTypeTelephones`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *GuestProfileType) GetTelephonesOk() (*CompanyProfileTypeTelephones, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *GuestProfileType) SetTelephones(v CompanyProfileTypeTelephones)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *GuestProfileType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetTraceCode

`func (o *GuestProfileType) GetTraceCode() string`

GetTraceCode returns the TraceCode field if non-nil, zero value otherwise.

### GetTraceCodeOk

`func (o *GuestProfileType) GetTraceCodeOk() (*string, bool)`

GetTraceCodeOk returns a tuple with the TraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceCode

`func (o *GuestProfileType) SetTraceCode(v string)`

SetTraceCode sets TraceCode field to given value.

### HasTraceCode

`func (o *GuestProfileType) HasTraceCode() bool`

HasTraceCode returns a boolean if a field has been set.

### GetURLs

`func (o *GuestProfileType) GetURLs() CompanyProfileTypeURLs`

GetURLs returns the URLs field if non-nil, zero value otherwise.

### GetURLsOk

`func (o *GuestProfileType) GetURLsOk() (*CompanyProfileTypeURLs, bool)`

GetURLsOk returns a tuple with the URLs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLs

`func (o *GuestProfileType) SetURLs(v CompanyProfileTypeURLs)`

SetURLs sets URLs field to given value.

### HasURLs

`func (o *GuestProfileType) HasURLs() bool`

HasURLs returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *GuestProfileType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *GuestProfileType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *GuestProfileType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *GuestProfileType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetWebUserAccounts

`func (o *GuestProfileType) GetWebUserAccounts() WebUserAccountsType`

GetWebUserAccounts returns the WebUserAccounts field if non-nil, zero value otherwise.

### GetWebUserAccountsOk

`func (o *GuestProfileType) GetWebUserAccountsOk() (*WebUserAccountsType, bool)`

GetWebUserAccountsOk returns a tuple with the WebUserAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebUserAccounts

`func (o *GuestProfileType) SetWebUserAccounts(v WebUserAccountsType)`

SetWebUserAccounts sets WebUserAccounts field to given value.

### HasWebUserAccounts

`func (o *GuestProfileType) HasWebUserAccounts() bool`

HasWebUserAccounts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


