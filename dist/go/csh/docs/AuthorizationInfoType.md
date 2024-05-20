# AuthorizationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ApprovalCode** | Pointer to **string** | The approval code authenticates the authorization. | [optional] 
**OriginalAuthSequence** | Pointer to **int32** | Unique Authorization Sequence for the authorization and settlement. | [optional] 
**VendorTranId** | Pointer to **string** | Vendor transaction id for the authorization. | [optional] 

## Methods

### NewAuthorizationInfoType

`func NewAuthorizationInfoType() *AuthorizationInfoType`

NewAuthorizationInfoType instantiates a new AuthorizationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationInfoTypeWithDefaults

`func NewAuthorizationInfoTypeWithDefaults() *AuthorizationInfoType`

NewAuthorizationInfoTypeWithDefaults instantiates a new AuthorizationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalAmount

`func (o *AuthorizationInfoType) GetApprovalAmount() CurrencyAmountType`

GetApprovalAmount returns the ApprovalAmount field if non-nil, zero value otherwise.

### GetApprovalAmountOk

`func (o *AuthorizationInfoType) GetApprovalAmountOk() (*CurrencyAmountType, bool)`

GetApprovalAmountOk returns a tuple with the ApprovalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalAmount

`func (o *AuthorizationInfoType) SetApprovalAmount(v CurrencyAmountType)`

SetApprovalAmount sets ApprovalAmount field to given value.

### HasApprovalAmount

`func (o *AuthorizationInfoType) HasApprovalAmount() bool`

HasApprovalAmount returns a boolean if a field has been set.

### GetApprovalCode

`func (o *AuthorizationInfoType) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *AuthorizationInfoType) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *AuthorizationInfoType) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *AuthorizationInfoType) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.

### GetOriginalAuthSequence

`func (o *AuthorizationInfoType) GetOriginalAuthSequence() int32`

GetOriginalAuthSequence returns the OriginalAuthSequence field if non-nil, zero value otherwise.

### GetOriginalAuthSequenceOk

`func (o *AuthorizationInfoType) GetOriginalAuthSequenceOk() (*int32, bool)`

GetOriginalAuthSequenceOk returns a tuple with the OriginalAuthSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAuthSequence

`func (o *AuthorizationInfoType) SetOriginalAuthSequence(v int32)`

SetOriginalAuthSequence sets OriginalAuthSequence field to given value.

### HasOriginalAuthSequence

`func (o *AuthorizationInfoType) HasOriginalAuthSequence() bool`

HasOriginalAuthSequence returns a boolean if a field has been set.

### GetVendorTranId

`func (o *AuthorizationInfoType) GetVendorTranId() string`

GetVendorTranId returns the VendorTranId field if non-nil, zero value otherwise.

### GetVendorTranIdOk

`func (o *AuthorizationInfoType) GetVendorTranIdOk() (*string, bool)`

GetVendorTranIdOk returns a tuple with the VendorTranId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorTranId

`func (o *AuthorizationInfoType) SetVendorTranId(v string)`

SetVendorTranId sets VendorTranId field to given value.

### HasVendorTranId

`func (o *AuthorizationInfoType) HasVendorTranId() bool`

HasVendorTranId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


