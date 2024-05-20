# CompAccountingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARNumber** | Pointer to **string** | AR Account Number of the authorizer | [optional] 
**AuthorizerId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AuthorizerName** | Pointer to **string** | Full name of the authorizer. | [optional] 
**AuthorizerRateCode** | Pointer to **string** | Rate code of the authorizer. | [optional] 
**AuthorizerUserName** | Pointer to **string** | Application user name of the authorizer | [optional] 
**CompTypeCode** | Pointer to **string** | The Comp Type for this Account. Used when using the Comp types functionality | [optional] 
**CompVoucherNo** | Pointer to **string** | The coupon or voucher number used by the external gaming system to track postings made to this routing. | [optional] 
**DateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**InheritAuthorizerRateCode** | Pointer to **bool** | Indicates whether user has the choice to have reservation inherit rate code from the authorizer. | [optional] 
**MembershipId** | Pointer to **string** | Membership number | [optional] 
**MembershipIdNo** | Pointer to **int32** | Unique Id of membership | [optional] 
**MembershipNameOnCard** | Pointer to **string** | Name displayed on the membership card | [optional] 

## Methods

### NewCompAccountingType

`func NewCompAccountingType() *CompAccountingType`

NewCompAccountingType instantiates a new CompAccountingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompAccountingTypeWithDefaults

`func NewCompAccountingTypeWithDefaults() *CompAccountingType`

NewCompAccountingTypeWithDefaults instantiates a new CompAccountingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARNumber

`func (o *CompAccountingType) GetARNumber() string`

GetARNumber returns the ARNumber field if non-nil, zero value otherwise.

### GetARNumberOk

`func (o *CompAccountingType) GetARNumberOk() (*string, bool)`

GetARNumberOk returns a tuple with the ARNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARNumber

`func (o *CompAccountingType) SetARNumber(v string)`

SetARNumber sets ARNumber field to given value.

### HasARNumber

`func (o *CompAccountingType) HasARNumber() bool`

HasARNumber returns a boolean if a field has been set.

### GetAuthorizerId

`func (o *CompAccountingType) GetAuthorizerId() UniqueIDType`

GetAuthorizerId returns the AuthorizerId field if non-nil, zero value otherwise.

### GetAuthorizerIdOk

`func (o *CompAccountingType) GetAuthorizerIdOk() (*UniqueIDType, bool)`

GetAuthorizerIdOk returns a tuple with the AuthorizerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerId

`func (o *CompAccountingType) SetAuthorizerId(v UniqueIDType)`

SetAuthorizerId sets AuthorizerId field to given value.

### HasAuthorizerId

`func (o *CompAccountingType) HasAuthorizerId() bool`

HasAuthorizerId returns a boolean if a field has been set.

### GetAuthorizerName

`func (o *CompAccountingType) GetAuthorizerName() string`

GetAuthorizerName returns the AuthorizerName field if non-nil, zero value otherwise.

### GetAuthorizerNameOk

`func (o *CompAccountingType) GetAuthorizerNameOk() (*string, bool)`

GetAuthorizerNameOk returns a tuple with the AuthorizerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerName

`func (o *CompAccountingType) SetAuthorizerName(v string)`

SetAuthorizerName sets AuthorizerName field to given value.

### HasAuthorizerName

`func (o *CompAccountingType) HasAuthorizerName() bool`

HasAuthorizerName returns a boolean if a field has been set.

### GetAuthorizerRateCode

`func (o *CompAccountingType) GetAuthorizerRateCode() string`

GetAuthorizerRateCode returns the AuthorizerRateCode field if non-nil, zero value otherwise.

### GetAuthorizerRateCodeOk

`func (o *CompAccountingType) GetAuthorizerRateCodeOk() (*string, bool)`

GetAuthorizerRateCodeOk returns a tuple with the AuthorizerRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerRateCode

`func (o *CompAccountingType) SetAuthorizerRateCode(v string)`

SetAuthorizerRateCode sets AuthorizerRateCode field to given value.

### HasAuthorizerRateCode

`func (o *CompAccountingType) HasAuthorizerRateCode() bool`

HasAuthorizerRateCode returns a boolean if a field has been set.

### GetAuthorizerUserName

`func (o *CompAccountingType) GetAuthorizerUserName() string`

GetAuthorizerUserName returns the AuthorizerUserName field if non-nil, zero value otherwise.

### GetAuthorizerUserNameOk

`func (o *CompAccountingType) GetAuthorizerUserNameOk() (*string, bool)`

GetAuthorizerUserNameOk returns a tuple with the AuthorizerUserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerUserName

`func (o *CompAccountingType) SetAuthorizerUserName(v string)`

SetAuthorizerUserName sets AuthorizerUserName field to given value.

### HasAuthorizerUserName

`func (o *CompAccountingType) HasAuthorizerUserName() bool`

HasAuthorizerUserName returns a boolean if a field has been set.

### GetCompTypeCode

`func (o *CompAccountingType) GetCompTypeCode() string`

GetCompTypeCode returns the CompTypeCode field if non-nil, zero value otherwise.

### GetCompTypeCodeOk

`func (o *CompAccountingType) GetCompTypeCodeOk() (*string, bool)`

GetCompTypeCodeOk returns a tuple with the CompTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompTypeCode

`func (o *CompAccountingType) SetCompTypeCode(v string)`

SetCompTypeCode sets CompTypeCode field to given value.

### HasCompTypeCode

`func (o *CompAccountingType) HasCompTypeCode() bool`

HasCompTypeCode returns a boolean if a field has been set.

### GetCompVoucherNo

`func (o *CompAccountingType) GetCompVoucherNo() string`

GetCompVoucherNo returns the CompVoucherNo field if non-nil, zero value otherwise.

### GetCompVoucherNoOk

`func (o *CompAccountingType) GetCompVoucherNoOk() (*string, bool)`

GetCompVoucherNoOk returns a tuple with the CompVoucherNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompVoucherNo

`func (o *CompAccountingType) SetCompVoucherNo(v string)`

SetCompVoucherNo sets CompVoucherNo field to given value.

### HasCompVoucherNo

`func (o *CompAccountingType) HasCompVoucherNo() bool`

HasCompVoucherNo returns a boolean if a field has been set.

### GetDateRange

`func (o *CompAccountingType) GetDateRange() DateRangeType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *CompAccountingType) GetDateRangeOk() (*DateRangeType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *CompAccountingType) SetDateRange(v DateRangeType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *CompAccountingType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetInheritAuthorizerRateCode

`func (o *CompAccountingType) GetInheritAuthorizerRateCode() bool`

GetInheritAuthorizerRateCode returns the InheritAuthorizerRateCode field if non-nil, zero value otherwise.

### GetInheritAuthorizerRateCodeOk

`func (o *CompAccountingType) GetInheritAuthorizerRateCodeOk() (*bool, bool)`

GetInheritAuthorizerRateCodeOk returns a tuple with the InheritAuthorizerRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritAuthorizerRateCode

`func (o *CompAccountingType) SetInheritAuthorizerRateCode(v bool)`

SetInheritAuthorizerRateCode sets InheritAuthorizerRateCode field to given value.

### HasInheritAuthorizerRateCode

`func (o *CompAccountingType) HasInheritAuthorizerRateCode() bool`

HasInheritAuthorizerRateCode returns a boolean if a field has been set.

### GetMembershipId

`func (o *CompAccountingType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *CompAccountingType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *CompAccountingType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *CompAccountingType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *CompAccountingType) GetMembershipIdNo() int32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *CompAccountingType) GetMembershipIdNoOk() (*int32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *CompAccountingType) SetMembershipIdNo(v int32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *CompAccountingType) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetMembershipNameOnCard

`func (o *CompAccountingType) GetMembershipNameOnCard() string`

GetMembershipNameOnCard returns the MembershipNameOnCard field if non-nil, zero value otherwise.

### GetMembershipNameOnCardOk

`func (o *CompAccountingType) GetMembershipNameOnCardOk() (*string, bool)`

GetMembershipNameOnCardOk returns a tuple with the MembershipNameOnCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipNameOnCard

`func (o *CompAccountingType) SetMembershipNameOnCard(v string)`

SetMembershipNameOnCard sets MembershipNameOnCard field to given value.

### HasMembershipNameOnCard

`func (o *CompAccountingType) HasMembershipNameOnCard() bool`

HasMembershipNameOnCard returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


