# AlertGuestInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestName** | Pointer to **string** | Guest Name. | [optional] 
**Membership** | Pointer to [**MembershipType**](MembershipType.md) |  | [optional] 
**VipStatus** | Pointer to [**VIPStatusType**](VIPStatusType.md) |  | [optional] 
**LastHotelCode** | Pointer to **string** | Hotel code of the last stay location of the guest. | [optional] 
**LastStayDate** | Pointer to **string** | Last stay date at the property. | [optional] 
**TotalStay** | Pointer to **int32** | Holds total number of days that the guest have stayed in the property. | [optional] 
**Comments** | Pointer to **string** | Additional alert information regarding the membership of the guest. | [optional] 
**Preference** | Pointer to **string** | Additional alert information regarding the guest. | [optional] 
**Preference2** | Pointer to **string** | Additional mandatory alert information regarding the guest preferences. | [optional] 
**GuestPreferredLanguage** | Pointer to **string** |  | [optional] 
**TotalBrandStay** | Pointer to **int32** | Holds total number of days that the guest have stayed in the properties for the same brand. | [optional] 
**BirthDate** | Pointer to **string** | Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format. | [optional] 
**BirthDateMasked** | Pointer to **string** | Indicates the date of birth as masked. | [optional] 

## Methods

### NewAlertGuestInfoType

`func NewAlertGuestInfoType() *AlertGuestInfoType`

NewAlertGuestInfoType instantiates a new AlertGuestInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertGuestInfoTypeWithDefaults

`func NewAlertGuestInfoTypeWithDefaults() *AlertGuestInfoType`

NewAlertGuestInfoTypeWithDefaults instantiates a new AlertGuestInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestName

`func (o *AlertGuestInfoType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *AlertGuestInfoType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *AlertGuestInfoType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *AlertGuestInfoType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetMembership

`func (o *AlertGuestInfoType) GetMembership() MembershipType`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *AlertGuestInfoType) GetMembershipOk() (*MembershipType, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *AlertGuestInfoType) SetMembership(v MembershipType)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *AlertGuestInfoType) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### GetVipStatus

`func (o *AlertGuestInfoType) GetVipStatus() VIPStatusType`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *AlertGuestInfoType) GetVipStatusOk() (*VIPStatusType, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *AlertGuestInfoType) SetVipStatus(v VIPStatusType)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *AlertGuestInfoType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.

### GetLastHotelCode

`func (o *AlertGuestInfoType) GetLastHotelCode() string`

GetLastHotelCode returns the LastHotelCode field if non-nil, zero value otherwise.

### GetLastHotelCodeOk

`func (o *AlertGuestInfoType) GetLastHotelCodeOk() (*string, bool)`

GetLastHotelCodeOk returns a tuple with the LastHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastHotelCode

`func (o *AlertGuestInfoType) SetLastHotelCode(v string)`

SetLastHotelCode sets LastHotelCode field to given value.

### HasLastHotelCode

`func (o *AlertGuestInfoType) HasLastHotelCode() bool`

HasLastHotelCode returns a boolean if a field has been set.

### GetLastStayDate

`func (o *AlertGuestInfoType) GetLastStayDate() string`

GetLastStayDate returns the LastStayDate field if non-nil, zero value otherwise.

### GetLastStayDateOk

`func (o *AlertGuestInfoType) GetLastStayDateOk() (*string, bool)`

GetLastStayDateOk returns a tuple with the LastStayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayDate

`func (o *AlertGuestInfoType) SetLastStayDate(v string)`

SetLastStayDate sets LastStayDate field to given value.

### HasLastStayDate

`func (o *AlertGuestInfoType) HasLastStayDate() bool`

HasLastStayDate returns a boolean if a field has been set.

### GetTotalStay

`func (o *AlertGuestInfoType) GetTotalStay() int32`

GetTotalStay returns the TotalStay field if non-nil, zero value otherwise.

### GetTotalStayOk

`func (o *AlertGuestInfoType) GetTotalStayOk() (*int32, bool)`

GetTotalStayOk returns a tuple with the TotalStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalStay

`func (o *AlertGuestInfoType) SetTotalStay(v int32)`

SetTotalStay sets TotalStay field to given value.

### HasTotalStay

`func (o *AlertGuestInfoType) HasTotalStay() bool`

HasTotalStay returns a boolean if a field has been set.

### GetComments

`func (o *AlertGuestInfoType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *AlertGuestInfoType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *AlertGuestInfoType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *AlertGuestInfoType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetPreference

`func (o *AlertGuestInfoType) GetPreference() string`

GetPreference returns the Preference field if non-nil, zero value otherwise.

### GetPreferenceOk

`func (o *AlertGuestInfoType) GetPreferenceOk() (*string, bool)`

GetPreferenceOk returns a tuple with the Preference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreference

`func (o *AlertGuestInfoType) SetPreference(v string)`

SetPreference sets Preference field to given value.

### HasPreference

`func (o *AlertGuestInfoType) HasPreference() bool`

HasPreference returns a boolean if a field has been set.

### GetPreference2

`func (o *AlertGuestInfoType) GetPreference2() string`

GetPreference2 returns the Preference2 field if non-nil, zero value otherwise.

### GetPreference2Ok

`func (o *AlertGuestInfoType) GetPreference2Ok() (*string, bool)`

GetPreference2Ok returns a tuple with the Preference2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreference2

`func (o *AlertGuestInfoType) SetPreference2(v string)`

SetPreference2 sets Preference2 field to given value.

### HasPreference2

`func (o *AlertGuestInfoType) HasPreference2() bool`

HasPreference2 returns a boolean if a field has been set.

### GetGuestPreferredLanguage

`func (o *AlertGuestInfoType) GetGuestPreferredLanguage() string`

GetGuestPreferredLanguage returns the GuestPreferredLanguage field if non-nil, zero value otherwise.

### GetGuestPreferredLanguageOk

`func (o *AlertGuestInfoType) GetGuestPreferredLanguageOk() (*string, bool)`

GetGuestPreferredLanguageOk returns a tuple with the GuestPreferredLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestPreferredLanguage

`func (o *AlertGuestInfoType) SetGuestPreferredLanguage(v string)`

SetGuestPreferredLanguage sets GuestPreferredLanguage field to given value.

### HasGuestPreferredLanguage

`func (o *AlertGuestInfoType) HasGuestPreferredLanguage() bool`

HasGuestPreferredLanguage returns a boolean if a field has been set.

### GetTotalBrandStay

`func (o *AlertGuestInfoType) GetTotalBrandStay() int32`

GetTotalBrandStay returns the TotalBrandStay field if non-nil, zero value otherwise.

### GetTotalBrandStayOk

`func (o *AlertGuestInfoType) GetTotalBrandStayOk() (*int32, bool)`

GetTotalBrandStayOk returns a tuple with the TotalBrandStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalBrandStay

`func (o *AlertGuestInfoType) SetTotalBrandStay(v int32)`

SetTotalBrandStay sets TotalBrandStay field to given value.

### HasTotalBrandStay

`func (o *AlertGuestInfoType) HasTotalBrandStay() bool`

HasTotalBrandStay returns a boolean if a field has been set.

### GetBirthDate

`func (o *AlertGuestInfoType) GetBirthDate() string`

GetBirthDate returns the BirthDate field if non-nil, zero value otherwise.

### GetBirthDateOk

`func (o *AlertGuestInfoType) GetBirthDateOk() (*string, bool)`

GetBirthDateOk returns a tuple with the BirthDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDate

`func (o *AlertGuestInfoType) SetBirthDate(v string)`

SetBirthDate sets BirthDate field to given value.

### HasBirthDate

`func (o *AlertGuestInfoType) HasBirthDate() bool`

HasBirthDate returns a boolean if a field has been set.

### GetBirthDateMasked

`func (o *AlertGuestInfoType) GetBirthDateMasked() string`

GetBirthDateMasked returns the BirthDateMasked field if non-nil, zero value otherwise.

### GetBirthDateMaskedOk

`func (o *AlertGuestInfoType) GetBirthDateMaskedOk() (*string, bool)`

GetBirthDateMaskedOk returns a tuple with the BirthDateMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDateMasked

`func (o *AlertGuestInfoType) SetBirthDateMasked(v string)`

SetBirthDateMasked sets BirthDateMasked field to given value.

### HasBirthDateMasked

`func (o *AlertGuestInfoType) HasBirthDateMasked() bool`

HasBirthDateMasked returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


