# StagedProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addresses** | Pointer to [**[]StagedProfileAddressType**](StagedProfileAddressType.md) | Collection of detailed information about address for the staged profile. | [optional] 
**Comments** | Pointer to [**[]StagedProfileCommentInfoType**](StagedProfileCommentInfoType.md) | List of Notes for the customer. | [optional] 
**Company** | Pointer to [**StagedProfileCompanyType**](StagedProfileCompanyType.md) |  | [optional] 
**Customer** | Pointer to [**StagedProfileCustomerType**](StagedProfileCustomerType.md) |  | [optional] 
**Emails** | Pointer to [**[]StagedProfileEmailType**](StagedProfileEmailType.md) | Collection of detailed information about email for the staged profile. | [optional] 
**HotelId** | Pointer to **string** | Hotel code that the staged profile belongs to. | [optional] 
**Identifications** | Pointer to [**[]StagedProfileIdentificationsType**](StagedProfileIdentificationsType.md) | Collection of detailed information about identification for the staged profile. | [optional] 
**ImportDate** | Pointer to **string** | The date on which the staged profile has been received. | [optional] 
**Keywords** | Pointer to [**[]StagedProfileKeywordType**](StagedProfileKeywordType.md) | Collection of detailed information about keyword for the staged profile. | [optional] 
**MailingActions** | Pointer to [**MailingActionsType**](MailingActionsType.md) |  | [optional] 
**Memberships** | Pointer to [**[]StagedProfileMembershipType**](StagedProfileMembershipType.md) | Collection of detailed information about memberships for the staged profile. | [optional] 
**NegotiatedRates** | Pointer to [**[]StagedProfileNegotiatedRateType**](StagedProfileNegotiatedRateType.md) | Collection of detailed information about negotiated rates for the staged profile. | [optional] 
**Preferences** | Pointer to [**[]StagedProfilePreferenceType**](StagedProfilePreferenceType.md) | Collection of detailed information about preferences for the staged profile. | [optional] 
**PrivacyInfo** | Pointer to [**PrivacyInfoType**](PrivacyInfoType.md) |  | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileType** | Pointer to **string** | Type of the staged profile. | [optional] 
**RoutingInstructions** | Pointer to [**[]StagedProfileRoutingInstructionType**](StagedProfileRoutingInstructionType.md) | Collection of routing instructions for the staged profile. | [optional] 
**StageStatus** | Pointer to **string** | The status of the staged profile. | [optional] 
**Telephones** | Pointer to [**[]StagedProfilePhoneType**](StagedProfilePhoneType.md) | Collection of detailed information about telephone/fax for the staged profile. | [optional] 
**URLs** | Pointer to [**[]StagedProfileURLType**](StagedProfileURLType.md) | Collection of detailed information about web url/address for the staged profile. | [optional] 
**UserDefinedFields** | Pointer to [**StagedProfileUserDefinedFieldsType**](StagedProfileUserDefinedFieldsType.md) |  | [optional] 

## Methods

### NewStagedProfileType

`func NewStagedProfileType() *StagedProfileType`

NewStagedProfileType instantiates a new StagedProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileTypeWithDefaults

`func NewStagedProfileTypeWithDefaults() *StagedProfileType`

NewStagedProfileTypeWithDefaults instantiates a new StagedProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddresses

`func (o *StagedProfileType) GetAddresses() []StagedProfileAddressType`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *StagedProfileType) GetAddressesOk() (*[]StagedProfileAddressType, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *StagedProfileType) SetAddresses(v []StagedProfileAddressType)`

SetAddresses sets Addresses field to given value.

### HasAddresses

`func (o *StagedProfileType) HasAddresses() bool`

HasAddresses returns a boolean if a field has been set.

### GetComments

`func (o *StagedProfileType) GetComments() []StagedProfileCommentInfoType`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *StagedProfileType) GetCommentsOk() (*[]StagedProfileCommentInfoType, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *StagedProfileType) SetComments(v []StagedProfileCommentInfoType)`

SetComments sets Comments field to given value.

### HasComments

`func (o *StagedProfileType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCompany

`func (o *StagedProfileType) GetCompany() StagedProfileCompanyType`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *StagedProfileType) GetCompanyOk() (*StagedProfileCompanyType, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *StagedProfileType) SetCompany(v StagedProfileCompanyType)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *StagedProfileType) HasCompany() bool`

HasCompany returns a boolean if a field has been set.

### GetCustomer

`func (o *StagedProfileType) GetCustomer() StagedProfileCustomerType`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *StagedProfileType) GetCustomerOk() (*StagedProfileCustomerType, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *StagedProfileType) SetCustomer(v StagedProfileCustomerType)`

SetCustomer sets Customer field to given value.

### HasCustomer

`func (o *StagedProfileType) HasCustomer() bool`

HasCustomer returns a boolean if a field has been set.

### GetEmails

`func (o *StagedProfileType) GetEmails() []StagedProfileEmailType`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *StagedProfileType) GetEmailsOk() (*[]StagedProfileEmailType, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *StagedProfileType) SetEmails(v []StagedProfileEmailType)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *StagedProfileType) HasEmails() bool`

HasEmails returns a boolean if a field has been set.

### GetHotelId

`func (o *StagedProfileType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StagedProfileType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StagedProfileType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StagedProfileType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIdentifications

`func (o *StagedProfileType) GetIdentifications() []StagedProfileIdentificationsType`

GetIdentifications returns the Identifications field if non-nil, zero value otherwise.

### GetIdentificationsOk

`func (o *StagedProfileType) GetIdentificationsOk() (*[]StagedProfileIdentificationsType, bool)`

GetIdentificationsOk returns a tuple with the Identifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentifications

`func (o *StagedProfileType) SetIdentifications(v []StagedProfileIdentificationsType)`

SetIdentifications sets Identifications field to given value.

### HasIdentifications

`func (o *StagedProfileType) HasIdentifications() bool`

HasIdentifications returns a boolean if a field has been set.

### GetImportDate

`func (o *StagedProfileType) GetImportDate() string`

GetImportDate returns the ImportDate field if non-nil, zero value otherwise.

### GetImportDateOk

`func (o *StagedProfileType) GetImportDateOk() (*string, bool)`

GetImportDateOk returns a tuple with the ImportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportDate

`func (o *StagedProfileType) SetImportDate(v string)`

SetImportDate sets ImportDate field to given value.

### HasImportDate

`func (o *StagedProfileType) HasImportDate() bool`

HasImportDate returns a boolean if a field has been set.

### GetKeywords

`func (o *StagedProfileType) GetKeywords() []StagedProfileKeywordType`

GetKeywords returns the Keywords field if non-nil, zero value otherwise.

### GetKeywordsOk

`func (o *StagedProfileType) GetKeywordsOk() (*[]StagedProfileKeywordType, bool)`

GetKeywordsOk returns a tuple with the Keywords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywords

`func (o *StagedProfileType) SetKeywords(v []StagedProfileKeywordType)`

SetKeywords sets Keywords field to given value.

### HasKeywords

`func (o *StagedProfileType) HasKeywords() bool`

HasKeywords returns a boolean if a field has been set.

### GetMailingActions

`func (o *StagedProfileType) GetMailingActions() MailingActionsType`

GetMailingActions returns the MailingActions field if non-nil, zero value otherwise.

### GetMailingActionsOk

`func (o *StagedProfileType) GetMailingActionsOk() (*MailingActionsType, bool)`

GetMailingActionsOk returns a tuple with the MailingActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailingActions

`func (o *StagedProfileType) SetMailingActions(v MailingActionsType)`

SetMailingActions sets MailingActions field to given value.

### HasMailingActions

`func (o *StagedProfileType) HasMailingActions() bool`

HasMailingActions returns a boolean if a field has been set.

### GetMemberships

`func (o *StagedProfileType) GetMemberships() []StagedProfileMembershipType`

GetMemberships returns the Memberships field if non-nil, zero value otherwise.

### GetMembershipsOk

`func (o *StagedProfileType) GetMembershipsOk() (*[]StagedProfileMembershipType, bool)`

GetMembershipsOk returns a tuple with the Memberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberships

`func (o *StagedProfileType) SetMemberships(v []StagedProfileMembershipType)`

SetMemberships sets Memberships field to given value.

### HasMemberships

`func (o *StagedProfileType) HasMemberships() bool`

HasMemberships returns a boolean if a field has been set.

### GetNegotiatedRates

`func (o *StagedProfileType) GetNegotiatedRates() []StagedProfileNegotiatedRateType`

GetNegotiatedRates returns the NegotiatedRates field if non-nil, zero value otherwise.

### GetNegotiatedRatesOk

`func (o *StagedProfileType) GetNegotiatedRatesOk() (*[]StagedProfileNegotiatedRateType, bool)`

GetNegotiatedRatesOk returns a tuple with the NegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRates

`func (o *StagedProfileType) SetNegotiatedRates(v []StagedProfileNegotiatedRateType)`

SetNegotiatedRates sets NegotiatedRates field to given value.

### HasNegotiatedRates

`func (o *StagedProfileType) HasNegotiatedRates() bool`

HasNegotiatedRates returns a boolean if a field has been set.

### GetPreferences

`func (o *StagedProfileType) GetPreferences() []StagedProfilePreferenceType`

GetPreferences returns the Preferences field if non-nil, zero value otherwise.

### GetPreferencesOk

`func (o *StagedProfileType) GetPreferencesOk() (*[]StagedProfilePreferenceType, bool)`

GetPreferencesOk returns a tuple with the Preferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferences

`func (o *StagedProfileType) SetPreferences(v []StagedProfilePreferenceType)`

SetPreferences sets Preferences field to given value.

### HasPreferences

`func (o *StagedProfileType) HasPreferences() bool`

HasPreferences returns a boolean if a field has been set.

### GetPrivacyInfo

`func (o *StagedProfileType) GetPrivacyInfo() PrivacyInfoType`

GetPrivacyInfo returns the PrivacyInfo field if non-nil, zero value otherwise.

### GetPrivacyInfoOk

`func (o *StagedProfileType) GetPrivacyInfoOk() (*PrivacyInfoType, bool)`

GetPrivacyInfoOk returns a tuple with the PrivacyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivacyInfo

`func (o *StagedProfileType) SetPrivacyInfo(v PrivacyInfoType)`

SetPrivacyInfo sets PrivacyInfo field to given value.

### HasPrivacyInfo

`func (o *StagedProfileType) HasPrivacyInfo() bool`

HasPrivacyInfo returns a boolean if a field has been set.

### GetProfileIdList

`func (o *StagedProfileType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *StagedProfileType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *StagedProfileType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *StagedProfileType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileType

`func (o *StagedProfileType) GetProfileType() string`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *StagedProfileType) GetProfileTypeOk() (*string, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *StagedProfileType) SetProfileType(v string)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *StagedProfileType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *StagedProfileType) GetRoutingInstructions() []StagedProfileRoutingInstructionType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *StagedProfileType) GetRoutingInstructionsOk() (*[]StagedProfileRoutingInstructionType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *StagedProfileType) SetRoutingInstructions(v []StagedProfileRoutingInstructionType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *StagedProfileType) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetStageStatus

`func (o *StagedProfileType) GetStageStatus() string`

GetStageStatus returns the StageStatus field if non-nil, zero value otherwise.

### GetStageStatusOk

`func (o *StagedProfileType) GetStageStatusOk() (*string, bool)`

GetStageStatusOk returns a tuple with the StageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStageStatus

`func (o *StagedProfileType) SetStageStatus(v string)`

SetStageStatus sets StageStatus field to given value.

### HasStageStatus

`func (o *StagedProfileType) HasStageStatus() bool`

HasStageStatus returns a boolean if a field has been set.

### GetTelephones

`func (o *StagedProfileType) GetTelephones() []StagedProfilePhoneType`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *StagedProfileType) GetTelephonesOk() (*[]StagedProfilePhoneType, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *StagedProfileType) SetTelephones(v []StagedProfilePhoneType)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *StagedProfileType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetURLs

`func (o *StagedProfileType) GetURLs() []StagedProfileURLType`

GetURLs returns the URLs field if non-nil, zero value otherwise.

### GetURLsOk

`func (o *StagedProfileType) GetURLsOk() (*[]StagedProfileURLType, bool)`

GetURLsOk returns a tuple with the URLs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLs

`func (o *StagedProfileType) SetURLs(v []StagedProfileURLType)`

SetURLs sets URLs field to given value.

### HasURLs

`func (o *StagedProfileType) HasURLs() bool`

HasURLs returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *StagedProfileType) GetUserDefinedFields() StagedProfileUserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *StagedProfileType) GetUserDefinedFieldsOk() (*StagedProfileUserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *StagedProfileType) SetUserDefinedFields(v StagedProfileUserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *StagedProfileType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


