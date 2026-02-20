# CCAuthorizationInstructionTypeAuthorizationSetup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckIn** | Pointer to **bool** | Indicates if authorization at Check In is allowed for this payment method. False will indicate that no authorization will be done at Check In for this payment method. | [optional] 
**Stay** | Pointer to **bool** | Indicates if authorization during the stay of the guest is allowed for this payment method. False will indicate that no authorization will be done during the stay and prior to settlements for this payment method. The settlement request will be sent without an authorization request. | [optional] 
**Deposit** | Pointer to **bool** | Indicates if authorization at Deposit is allowed for this payment method. False will indicate that no authorization will be done at the time of deposit payments, for this payment method. The settlement request will be sent without an authorization request. | [optional] 
**PayOnly** | Pointer to **bool** | Indicates if this payment method is setup as a PayOnly, which does not require authorization to be done prior to settlement. The special settlement handling will take care of both Authorization and Settlement together. | [optional] 

## Methods

### NewCCAuthorizationInstructionTypeAuthorizationSetup

`func NewCCAuthorizationInstructionTypeAuthorizationSetup() *CCAuthorizationInstructionTypeAuthorizationSetup`

NewCCAuthorizationInstructionTypeAuthorizationSetup instantiates a new CCAuthorizationInstructionTypeAuthorizationSetup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCAuthorizationInstructionTypeAuthorizationSetupWithDefaults

`func NewCCAuthorizationInstructionTypeAuthorizationSetupWithDefaults() *CCAuthorizationInstructionTypeAuthorizationSetup`

NewCCAuthorizationInstructionTypeAuthorizationSetupWithDefaults instantiates a new CCAuthorizationInstructionTypeAuthorizationSetup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckIn

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetCheckIn() bool`

GetCheckIn returns the CheckIn field if non-nil, zero value otherwise.

### GetCheckInOk

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetCheckInOk() (*bool, bool)`

GetCheckInOk returns a tuple with the CheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckIn

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) SetCheckIn(v bool)`

SetCheckIn sets CheckIn field to given value.

### HasCheckIn

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) HasCheckIn() bool`

HasCheckIn returns a boolean if a field has been set.

### GetStay

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetStay() bool`

GetStay returns the Stay field if non-nil, zero value otherwise.

### GetStayOk

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetStayOk() (*bool, bool)`

GetStayOk returns a tuple with the Stay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStay

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) SetStay(v bool)`

SetStay sets Stay field to given value.

### HasStay

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) HasStay() bool`

HasStay returns a boolean if a field has been set.

### GetDeposit

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetDeposit() bool`

GetDeposit returns the Deposit field if non-nil, zero value otherwise.

### GetDepositOk

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetDepositOk() (*bool, bool)`

GetDepositOk returns a tuple with the Deposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposit

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) SetDeposit(v bool)`

SetDeposit sets Deposit field to given value.

### HasDeposit

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) HasDeposit() bool`

HasDeposit returns a boolean if a field has been set.

### GetPayOnly

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetPayOnly() bool`

GetPayOnly returns the PayOnly field if non-nil, zero value otherwise.

### GetPayOnlyOk

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) GetPayOnlyOk() (*bool, bool)`

GetPayOnlyOk returns a tuple with the PayOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayOnly

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) SetPayOnly(v bool)`

SetPayOnly sets PayOnly field to given value.

### HasPayOnly

`func (o *CCAuthorizationInstructionTypeAuthorizationSetup) HasPayOnly() bool`

HasPayOnly returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


