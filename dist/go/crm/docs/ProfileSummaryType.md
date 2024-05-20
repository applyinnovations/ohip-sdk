# ProfileSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARAccount** | Pointer to [**DirectBillingType**](DirectBillingType.md) |  | [optional] 
**AdditionalInfo** | Pointer to [**ProfileAdditionalInfoType**](ProfileAdditionalInfoType.md) |  | [optional] 
**AddressInfo** | Pointer to [**AddressInfoType**](AddressInfoType.md) |  | [optional] 
**AllowedActions** | Pointer to [**[]ProfileAllowedActionType**](ProfileAllowedActionType.md) | Allowed actions for profile operations. | [optional] 
**AltName** | Pointer to [**ProfileNameType**](ProfileNameType.md) |  | [optional] 
**Anonymization** | Pointer to [**AnonymizationType**](AnonymizationType.md) |  | [optional] 
**Cashiering** | Pointer to [**ProfileCashieringType**](ProfileCashieringType.md) |  | [optional] 
**CitizenCountry** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**Commission** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**EmailInfo** | Pointer to [**EmailInfoType**](EmailInfoType.md) |  | [optional] 
**FormerName** | Pointer to [**ProfileSummaryTypeFormerName**](ProfileSummaryTypeFormerName.md) |  | [optional] 
**InheritedNegRates** | Pointer to **bool** | Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastStayInfo** | Pointer to [**LastStayInfoType**](LastStayInfoType.md) |  | [optional] 
**Owners** | Pointer to [**[]OwnerType**](OwnerType.md) | Generic type for a list of owners. | [optional] 
**PrimaryAccountInfo** | Pointer to [**PrimaryProfileInfoType**](PrimaryProfileInfoType.md) |  | [optional] 
**PrimaryCompany** | Pointer to **string** | Primary Company of the profile. | [optional] 
**PrivateProfile** | Pointer to **bool** | This element tells profile is property exclusive or not. | [optional] 
**ProfileAccessType** | Pointer to [**ProfileAccessType**](ProfileAccessType.md) |  | [optional] 
**ProfileIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**ProfileMembership** | Pointer to [**ProfileMembershipType**](ProfileMembershipType.md) |  | [optional] 
**ProfileRestrictions** | Pointer to [**ProfileRestrictions**](ProfileRestrictions.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**Protected** | Pointer to **string** | What level this profile is protected. | [optional] 
**RegisteredProperty** | Pointer to **string** | Property this profile is registered with. | [optional] 
**SalesInfo** | Pointer to [**SalesInfoType**](SalesInfoType.md) |  | [optional] 
**SearchMatches** | Pointer to [**[]SearchMatchType**](SearchMatchType.md) | List of Generic Name-Value-Pair Parameters used for super search matches. | [optional] 
**StatusCode** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**Subscription** | Pointer to **bool** | This element tells If there is an active subscription for this external profile . | [optional] 
**TaxInfo** | Pointer to [**ProfileTaxInfoType**](ProfileTaxInfoType.md) |  | [optional] 
**TelephoneInfo** | Pointer to [**TelephoneInfoType**](TelephoneInfoType.md) |  | [optional] 
**URLInfo** | Pointer to [**URLInfoType**](URLInfoType.md) |  | [optional] 
**VipStatus** | Pointer to [**VIPStatusType**](VIPStatusType.md) |  | [optional] 

## Methods

### NewProfileSummaryType

`func NewProfileSummaryType() *ProfileSummaryType`

NewProfileSummaryType instantiates a new ProfileSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileSummaryTypeWithDefaults

`func NewProfileSummaryTypeWithDefaults() *ProfileSummaryType`

NewProfileSummaryTypeWithDefaults instantiates a new ProfileSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARAccount

`func (o *ProfileSummaryType) GetARAccount() DirectBillingType`

GetARAccount returns the ARAccount field if non-nil, zero value otherwise.

### GetARAccountOk

`func (o *ProfileSummaryType) GetARAccountOk() (*DirectBillingType, bool)`

GetARAccountOk returns a tuple with the ARAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARAccount

`func (o *ProfileSummaryType) SetARAccount(v DirectBillingType)`

SetARAccount sets ARAccount field to given value.

### HasARAccount

`func (o *ProfileSummaryType) HasARAccount() bool`

HasARAccount returns a boolean if a field has been set.

### GetAdditionalInfo

`func (o *ProfileSummaryType) GetAdditionalInfo() ProfileAdditionalInfoType`

GetAdditionalInfo returns the AdditionalInfo field if non-nil, zero value otherwise.

### GetAdditionalInfoOk

`func (o *ProfileSummaryType) GetAdditionalInfoOk() (*ProfileAdditionalInfoType, bool)`

GetAdditionalInfoOk returns a tuple with the AdditionalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalInfo

`func (o *ProfileSummaryType) SetAdditionalInfo(v ProfileAdditionalInfoType)`

SetAdditionalInfo sets AdditionalInfo field to given value.

### HasAdditionalInfo

`func (o *ProfileSummaryType) HasAdditionalInfo() bool`

HasAdditionalInfo returns a boolean if a field has been set.

### GetAddressInfo

`func (o *ProfileSummaryType) GetAddressInfo() AddressInfoType`

GetAddressInfo returns the AddressInfo field if non-nil, zero value otherwise.

### GetAddressInfoOk

`func (o *ProfileSummaryType) GetAddressInfoOk() (*AddressInfoType, bool)`

GetAddressInfoOk returns a tuple with the AddressInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressInfo

`func (o *ProfileSummaryType) SetAddressInfo(v AddressInfoType)`

SetAddressInfo sets AddressInfo field to given value.

### HasAddressInfo

`func (o *ProfileSummaryType) HasAddressInfo() bool`

HasAddressInfo returns a boolean if a field has been set.

### GetAllowedActions

`func (o *ProfileSummaryType) GetAllowedActions() []ProfileAllowedActionType`

GetAllowedActions returns the AllowedActions field if non-nil, zero value otherwise.

### GetAllowedActionsOk

`func (o *ProfileSummaryType) GetAllowedActionsOk() (*[]ProfileAllowedActionType, bool)`

GetAllowedActionsOk returns a tuple with the AllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedActions

`func (o *ProfileSummaryType) SetAllowedActions(v []ProfileAllowedActionType)`

SetAllowedActions sets AllowedActions field to given value.

### HasAllowedActions

`func (o *ProfileSummaryType) HasAllowedActions() bool`

HasAllowedActions returns a boolean if a field has been set.

### GetAltName

`func (o *ProfileSummaryType) GetAltName() ProfileNameType`

GetAltName returns the AltName field if non-nil, zero value otherwise.

### GetAltNameOk

`func (o *ProfileSummaryType) GetAltNameOk() (*ProfileNameType, bool)`

GetAltNameOk returns a tuple with the AltName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAltName

`func (o *ProfileSummaryType) SetAltName(v ProfileNameType)`

SetAltName sets AltName field to given value.

### HasAltName

`func (o *ProfileSummaryType) HasAltName() bool`

HasAltName returns a boolean if a field has been set.

### GetAnonymization

`func (o *ProfileSummaryType) GetAnonymization() AnonymizationType`

GetAnonymization returns the Anonymization field if non-nil, zero value otherwise.

### GetAnonymizationOk

`func (o *ProfileSummaryType) GetAnonymizationOk() (*AnonymizationType, bool)`

GetAnonymizationOk returns a tuple with the Anonymization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnonymization

`func (o *ProfileSummaryType) SetAnonymization(v AnonymizationType)`

SetAnonymization sets Anonymization field to given value.

### HasAnonymization

`func (o *ProfileSummaryType) HasAnonymization() bool`

HasAnonymization returns a boolean if a field has been set.

### GetCashiering

`func (o *ProfileSummaryType) GetCashiering() ProfileCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *ProfileSummaryType) GetCashieringOk() (*ProfileCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *ProfileSummaryType) SetCashiering(v ProfileCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *ProfileSummaryType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetCitizenCountry

`func (o *ProfileSummaryType) GetCitizenCountry() CountryNameType`

GetCitizenCountry returns the CitizenCountry field if non-nil, zero value otherwise.

### GetCitizenCountryOk

`func (o *ProfileSummaryType) GetCitizenCountryOk() (*CountryNameType, bool)`

GetCitizenCountryOk returns a tuple with the CitizenCountry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCitizenCountry

`func (o *ProfileSummaryType) SetCitizenCountry(v CountryNameType)`

SetCitizenCountry sets CitizenCountry field to given value.

### HasCitizenCountry

`func (o *ProfileSummaryType) HasCitizenCountry() bool`

HasCitizenCountry returns a boolean if a field has been set.

### GetCommission

`func (o *ProfileSummaryType) GetCommission() CodeDescriptionType`

GetCommission returns the Commission field if non-nil, zero value otherwise.

### GetCommissionOk

`func (o *ProfileSummaryType) GetCommissionOk() (*CodeDescriptionType, bool)`

GetCommissionOk returns a tuple with the Commission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommission

`func (o *ProfileSummaryType) SetCommission(v CodeDescriptionType)`

SetCommission sets Commission field to given value.

### HasCommission

`func (o *ProfileSummaryType) HasCommission() bool`

HasCommission returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ProfileSummaryType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ProfileSummaryType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ProfileSummaryType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ProfileSummaryType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ProfileSummaryType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ProfileSummaryType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ProfileSummaryType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ProfileSummaryType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetEmailInfo

`func (o *ProfileSummaryType) GetEmailInfo() EmailInfoType`

GetEmailInfo returns the EmailInfo field if non-nil, zero value otherwise.

### GetEmailInfoOk

`func (o *ProfileSummaryType) GetEmailInfoOk() (*EmailInfoType, bool)`

GetEmailInfoOk returns a tuple with the EmailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailInfo

`func (o *ProfileSummaryType) SetEmailInfo(v EmailInfoType)`

SetEmailInfo sets EmailInfo field to given value.

### HasEmailInfo

`func (o *ProfileSummaryType) HasEmailInfo() bool`

HasEmailInfo returns a boolean if a field has been set.

### GetFormerName

`func (o *ProfileSummaryType) GetFormerName() ProfileSummaryTypeFormerName`

GetFormerName returns the FormerName field if non-nil, zero value otherwise.

### GetFormerNameOk

`func (o *ProfileSummaryType) GetFormerNameOk() (*ProfileSummaryTypeFormerName, bool)`

GetFormerNameOk returns a tuple with the FormerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormerName

`func (o *ProfileSummaryType) SetFormerName(v ProfileSummaryTypeFormerName)`

SetFormerName sets FormerName field to given value.

### HasFormerName

`func (o *ProfileSummaryType) HasFormerName() bool`

HasFormerName returns a boolean if a field has been set.

### GetInheritedNegRates

`func (o *ProfileSummaryType) GetInheritedNegRates() bool`

GetInheritedNegRates returns the InheritedNegRates field if non-nil, zero value otherwise.

### GetInheritedNegRatesOk

`func (o *ProfileSummaryType) GetInheritedNegRatesOk() (*bool, bool)`

GetInheritedNegRatesOk returns a tuple with the InheritedNegRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritedNegRates

`func (o *ProfileSummaryType) SetInheritedNegRates(v bool)`

SetInheritedNegRates sets InheritedNegRates field to given value.

### HasInheritedNegRates

`func (o *ProfileSummaryType) HasInheritedNegRates() bool`

HasInheritedNegRates returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ProfileSummaryType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ProfileSummaryType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ProfileSummaryType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ProfileSummaryType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ProfileSummaryType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ProfileSummaryType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ProfileSummaryType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ProfileSummaryType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastStayInfo

`func (o *ProfileSummaryType) GetLastStayInfo() LastStayInfoType`

GetLastStayInfo returns the LastStayInfo field if non-nil, zero value otherwise.

### GetLastStayInfoOk

`func (o *ProfileSummaryType) GetLastStayInfoOk() (*LastStayInfoType, bool)`

GetLastStayInfoOk returns a tuple with the LastStayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayInfo

`func (o *ProfileSummaryType) SetLastStayInfo(v LastStayInfoType)`

SetLastStayInfo sets LastStayInfo field to given value.

### HasLastStayInfo

`func (o *ProfileSummaryType) HasLastStayInfo() bool`

HasLastStayInfo returns a boolean if a field has been set.

### GetOwners

`func (o *ProfileSummaryType) GetOwners() []OwnerType`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *ProfileSummaryType) GetOwnersOk() (*[]OwnerType, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *ProfileSummaryType) SetOwners(v []OwnerType)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *ProfileSummaryType) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetPrimaryAccountInfo

`func (o *ProfileSummaryType) GetPrimaryAccountInfo() PrimaryProfileInfoType`

GetPrimaryAccountInfo returns the PrimaryAccountInfo field if non-nil, zero value otherwise.

### GetPrimaryAccountInfoOk

`func (o *ProfileSummaryType) GetPrimaryAccountInfoOk() (*PrimaryProfileInfoType, bool)`

GetPrimaryAccountInfoOk returns a tuple with the PrimaryAccountInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryAccountInfo

`func (o *ProfileSummaryType) SetPrimaryAccountInfo(v PrimaryProfileInfoType)`

SetPrimaryAccountInfo sets PrimaryAccountInfo field to given value.

### HasPrimaryAccountInfo

`func (o *ProfileSummaryType) HasPrimaryAccountInfo() bool`

HasPrimaryAccountInfo returns a boolean if a field has been set.

### GetPrimaryCompany

`func (o *ProfileSummaryType) GetPrimaryCompany() string`

GetPrimaryCompany returns the PrimaryCompany field if non-nil, zero value otherwise.

### GetPrimaryCompanyOk

`func (o *ProfileSummaryType) GetPrimaryCompanyOk() (*string, bool)`

GetPrimaryCompanyOk returns a tuple with the PrimaryCompany field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryCompany

`func (o *ProfileSummaryType) SetPrimaryCompany(v string)`

SetPrimaryCompany sets PrimaryCompany field to given value.

### HasPrimaryCompany

`func (o *ProfileSummaryType) HasPrimaryCompany() bool`

HasPrimaryCompany returns a boolean if a field has been set.

### GetPrivateProfile

`func (o *ProfileSummaryType) GetPrivateProfile() bool`

GetPrivateProfile returns the PrivateProfile field if non-nil, zero value otherwise.

### GetPrivateProfileOk

`func (o *ProfileSummaryType) GetPrivateProfileOk() (*bool, bool)`

GetPrivateProfileOk returns a tuple with the PrivateProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateProfile

`func (o *ProfileSummaryType) SetPrivateProfile(v bool)`

SetPrivateProfile sets PrivateProfile field to given value.

### HasPrivateProfile

`func (o *ProfileSummaryType) HasPrivateProfile() bool`

HasPrivateProfile returns a boolean if a field has been set.

### GetProfileAccessType

`func (o *ProfileSummaryType) GetProfileAccessType() ProfileAccessType`

GetProfileAccessType returns the ProfileAccessType field if non-nil, zero value otherwise.

### GetProfileAccessTypeOk

`func (o *ProfileSummaryType) GetProfileAccessTypeOk() (*ProfileAccessType, bool)`

GetProfileAccessTypeOk returns a tuple with the ProfileAccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAccessType

`func (o *ProfileSummaryType) SetProfileAccessType(v ProfileAccessType)`

SetProfileAccessType sets ProfileAccessType field to given value.

### HasProfileAccessType

`func (o *ProfileSummaryType) HasProfileAccessType() bool`

HasProfileAccessType returns a boolean if a field has been set.

### GetProfileIndicators

`func (o *ProfileSummaryType) GetProfileIndicators() []IndicatorType`

GetProfileIndicators returns the ProfileIndicators field if non-nil, zero value otherwise.

### GetProfileIndicatorsOk

`func (o *ProfileSummaryType) GetProfileIndicatorsOk() (*[]IndicatorType, bool)`

GetProfileIndicatorsOk returns a tuple with the ProfileIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIndicators

`func (o *ProfileSummaryType) SetProfileIndicators(v []IndicatorType)`

SetProfileIndicators sets ProfileIndicators field to given value.

### HasProfileIndicators

`func (o *ProfileSummaryType) HasProfileIndicators() bool`

HasProfileIndicators returns a boolean if a field has been set.

### GetProfileMembership

`func (o *ProfileSummaryType) GetProfileMembership() ProfileMembershipType`

GetProfileMembership returns the ProfileMembership field if non-nil, zero value otherwise.

### GetProfileMembershipOk

`func (o *ProfileSummaryType) GetProfileMembershipOk() (*ProfileMembershipType, bool)`

GetProfileMembershipOk returns a tuple with the ProfileMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMembership

`func (o *ProfileSummaryType) SetProfileMembership(v ProfileMembershipType)`

SetProfileMembership sets ProfileMembership field to given value.

### HasProfileMembership

`func (o *ProfileSummaryType) HasProfileMembership() bool`

HasProfileMembership returns a boolean if a field has been set.

### GetProfileRestrictions

`func (o *ProfileSummaryType) GetProfileRestrictions() ProfileRestrictions`

GetProfileRestrictions returns the ProfileRestrictions field if non-nil, zero value otherwise.

### GetProfileRestrictionsOk

`func (o *ProfileSummaryType) GetProfileRestrictionsOk() (*ProfileRestrictions, bool)`

GetProfileRestrictionsOk returns a tuple with the ProfileRestrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileRestrictions

`func (o *ProfileSummaryType) SetProfileRestrictions(v ProfileRestrictions)`

SetProfileRestrictions sets ProfileRestrictions field to given value.

### HasProfileRestrictions

`func (o *ProfileSummaryType) HasProfileRestrictions() bool`

HasProfileRestrictions returns a boolean if a field has been set.

### GetProfileType

`func (o *ProfileSummaryType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ProfileSummaryType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ProfileSummaryType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ProfileSummaryType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetProtected

`func (o *ProfileSummaryType) GetProtected() string`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *ProfileSummaryType) GetProtectedOk() (*string, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *ProfileSummaryType) SetProtected(v string)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *ProfileSummaryType) HasProtected() bool`

HasProtected returns a boolean if a field has been set.

### GetRegisteredProperty

`func (o *ProfileSummaryType) GetRegisteredProperty() string`

GetRegisteredProperty returns the RegisteredProperty field if non-nil, zero value otherwise.

### GetRegisteredPropertyOk

`func (o *ProfileSummaryType) GetRegisteredPropertyOk() (*string, bool)`

GetRegisteredPropertyOk returns a tuple with the RegisteredProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisteredProperty

`func (o *ProfileSummaryType) SetRegisteredProperty(v string)`

SetRegisteredProperty sets RegisteredProperty field to given value.

### HasRegisteredProperty

`func (o *ProfileSummaryType) HasRegisteredProperty() bool`

HasRegisteredProperty returns a boolean if a field has been set.

### GetSalesInfo

`func (o *ProfileSummaryType) GetSalesInfo() SalesInfoType`

GetSalesInfo returns the SalesInfo field if non-nil, zero value otherwise.

### GetSalesInfoOk

`func (o *ProfileSummaryType) GetSalesInfoOk() (*SalesInfoType, bool)`

GetSalesInfoOk returns a tuple with the SalesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesInfo

`func (o *ProfileSummaryType) SetSalesInfo(v SalesInfoType)`

SetSalesInfo sets SalesInfo field to given value.

### HasSalesInfo

`func (o *ProfileSummaryType) HasSalesInfo() bool`

HasSalesInfo returns a boolean if a field has been set.

### GetSearchMatches

`func (o *ProfileSummaryType) GetSearchMatches() []SearchMatchType`

GetSearchMatches returns the SearchMatches field if non-nil, zero value otherwise.

### GetSearchMatchesOk

`func (o *ProfileSummaryType) GetSearchMatchesOk() (*[]SearchMatchType, bool)`

GetSearchMatchesOk returns a tuple with the SearchMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchMatches

`func (o *ProfileSummaryType) SetSearchMatches(v []SearchMatchType)`

SetSearchMatches sets SearchMatches field to given value.

### HasSearchMatches

`func (o *ProfileSummaryType) HasSearchMatches() bool`

HasSearchMatches returns a boolean if a field has been set.

### GetStatusCode

`func (o *ProfileSummaryType) GetStatusCode() ProfileStatusType`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *ProfileSummaryType) GetStatusCodeOk() (*ProfileStatusType, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *ProfileSummaryType) SetStatusCode(v ProfileStatusType)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *ProfileSummaryType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetSubscription

`func (o *ProfileSummaryType) GetSubscription() bool`

GetSubscription returns the Subscription field if non-nil, zero value otherwise.

### GetSubscriptionOk

`func (o *ProfileSummaryType) GetSubscriptionOk() (*bool, bool)`

GetSubscriptionOk returns a tuple with the Subscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscription

`func (o *ProfileSummaryType) SetSubscription(v bool)`

SetSubscription sets Subscription field to given value.

### HasSubscription

`func (o *ProfileSummaryType) HasSubscription() bool`

HasSubscription returns a boolean if a field has been set.

### GetTaxInfo

`func (o *ProfileSummaryType) GetTaxInfo() ProfileTaxInfoType`

GetTaxInfo returns the TaxInfo field if non-nil, zero value otherwise.

### GetTaxInfoOk

`func (o *ProfileSummaryType) GetTaxInfoOk() (*ProfileTaxInfoType, bool)`

GetTaxInfoOk returns a tuple with the TaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInfo

`func (o *ProfileSummaryType) SetTaxInfo(v ProfileTaxInfoType)`

SetTaxInfo sets TaxInfo field to given value.

### HasTaxInfo

`func (o *ProfileSummaryType) HasTaxInfo() bool`

HasTaxInfo returns a boolean if a field has been set.

### GetTelephoneInfo

`func (o *ProfileSummaryType) GetTelephoneInfo() TelephoneInfoType`

GetTelephoneInfo returns the TelephoneInfo field if non-nil, zero value otherwise.

### GetTelephoneInfoOk

`func (o *ProfileSummaryType) GetTelephoneInfoOk() (*TelephoneInfoType, bool)`

GetTelephoneInfoOk returns a tuple with the TelephoneInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneInfo

`func (o *ProfileSummaryType) SetTelephoneInfo(v TelephoneInfoType)`

SetTelephoneInfo sets TelephoneInfo field to given value.

### HasTelephoneInfo

`func (o *ProfileSummaryType) HasTelephoneInfo() bool`

HasTelephoneInfo returns a boolean if a field has been set.

### GetURLInfo

`func (o *ProfileSummaryType) GetURLInfo() URLInfoType`

GetURLInfo returns the URLInfo field if non-nil, zero value otherwise.

### GetURLInfoOk

`func (o *ProfileSummaryType) GetURLInfoOk() (*URLInfoType, bool)`

GetURLInfoOk returns a tuple with the URLInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLInfo

`func (o *ProfileSummaryType) SetURLInfo(v URLInfoType)`

SetURLInfo sets URLInfo field to given value.

### HasURLInfo

`func (o *ProfileSummaryType) HasURLInfo() bool`

HasURLInfo returns a boolean if a field has been set.

### GetVipStatus

`func (o *ProfileSummaryType) GetVipStatus() VIPStatusType`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *ProfileSummaryType) GetVipStatusOk() (*VIPStatusType, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *ProfileSummaryType) SetVipStatus(v VIPStatusType)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *ProfileSummaryType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


