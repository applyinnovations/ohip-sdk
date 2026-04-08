# MembershipAwardRecipientInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MemberInfo** | Pointer to [**ProfileNameType**](ProfileNameType.md) |  | [optional] 
**PhoneNumber** | Pointer to **string** | Phone number | [optional] 
**CompanyName** | Pointer to **string** | It returns a Company Name,If the member is associated with a company. | [optional] 
**AddressInfo** | Pointer to [**AddressInfoType**](AddressInfoType.md) |  | [optional] 

## Methods

### NewMembershipAwardRecipientInfoType

`func NewMembershipAwardRecipientInfoType() *MembershipAwardRecipientInfoType`

NewMembershipAwardRecipientInfoType instantiates a new MembershipAwardRecipientInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardRecipientInfoTypeWithDefaults

`func NewMembershipAwardRecipientInfoTypeWithDefaults() *MembershipAwardRecipientInfoType`

NewMembershipAwardRecipientInfoTypeWithDefaults instantiates a new MembershipAwardRecipientInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMemberInfo

`func (o *MembershipAwardRecipientInfoType) GetMemberInfo() ProfileNameType`

GetMemberInfo returns the MemberInfo field if non-nil, zero value otherwise.

### GetMemberInfoOk

`func (o *MembershipAwardRecipientInfoType) GetMemberInfoOk() (*ProfileNameType, bool)`

GetMemberInfoOk returns a tuple with the MemberInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberInfo

`func (o *MembershipAwardRecipientInfoType) SetMemberInfo(v ProfileNameType)`

SetMemberInfo sets MemberInfo field to given value.

### HasMemberInfo

`func (o *MembershipAwardRecipientInfoType) HasMemberInfo() bool`

HasMemberInfo returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *MembershipAwardRecipientInfoType) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *MembershipAwardRecipientInfoType) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *MembershipAwardRecipientInfoType) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *MembershipAwardRecipientInfoType) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### GetCompanyName

`func (o *MembershipAwardRecipientInfoType) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *MembershipAwardRecipientInfoType) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *MembershipAwardRecipientInfoType) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *MembershipAwardRecipientInfoType) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetAddressInfo

`func (o *MembershipAwardRecipientInfoType) GetAddressInfo() AddressInfoType`

GetAddressInfo returns the AddressInfo field if non-nil, zero value otherwise.

### GetAddressInfoOk

`func (o *MembershipAwardRecipientInfoType) GetAddressInfoOk() (*AddressInfoType, bool)`

GetAddressInfoOk returns a tuple with the AddressInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressInfo

`func (o *MembershipAwardRecipientInfoType) SetAddressInfo(v AddressInfoType)`

SetAddressInfo sets AddressInfo field to given value.

### HasAddressInfo

`func (o *MembershipAwardRecipientInfoType) HasAddressInfo() bool`

HasAddressInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


