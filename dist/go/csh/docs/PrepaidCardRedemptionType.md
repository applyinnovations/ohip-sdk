# PrepaidCardRedemptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CardNo** | Pointer to **string** | Prepaid card number. | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Pin** | Pointer to **string** | Prepaid card number. | [optional] 
**Reference** | Pointer to **string** | Additional information regarding the redemption. | [optional] 
**TransactionCode** | Pointer to **string** | The associated redemption transaction code. | [optional] 

## Methods

### NewPrepaidCardRedemptionType

`func NewPrepaidCardRedemptionType() *PrepaidCardRedemptionType`

NewPrepaidCardRedemptionType instantiates a new PrepaidCardRedemptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrepaidCardRedemptionTypeWithDefaults

`func NewPrepaidCardRedemptionTypeWithDefaults() *PrepaidCardRedemptionType`

NewPrepaidCardRedemptionTypeWithDefaults instantiates a new PrepaidCardRedemptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PrepaidCardRedemptionType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PrepaidCardRedemptionType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PrepaidCardRedemptionType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PrepaidCardRedemptionType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCardNo

`func (o *PrepaidCardRedemptionType) GetCardNo() string`

GetCardNo returns the CardNo field if non-nil, zero value otherwise.

### GetCardNoOk

`func (o *PrepaidCardRedemptionType) GetCardNoOk() (*string, bool)`

GetCardNoOk returns a tuple with the CardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNo

`func (o *PrepaidCardRedemptionType) SetCardNo(v string)`

SetCardNo sets CardNo field to given value.

### HasCardNo

`func (o *PrepaidCardRedemptionType) HasCardNo() bool`

HasCardNo returns a boolean if a field has been set.

### GetInterfaceId

`func (o *PrepaidCardRedemptionType) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *PrepaidCardRedemptionType) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *PrepaidCardRedemptionType) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *PrepaidCardRedemptionType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetPin

`func (o *PrepaidCardRedemptionType) GetPin() string`

GetPin returns the Pin field if non-nil, zero value otherwise.

### GetPinOk

`func (o *PrepaidCardRedemptionType) GetPinOk() (*string, bool)`

GetPinOk returns a tuple with the Pin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPin

`func (o *PrepaidCardRedemptionType) SetPin(v string)`

SetPin sets Pin field to given value.

### HasPin

`func (o *PrepaidCardRedemptionType) HasPin() bool`

HasPin returns a boolean if a field has been set.

### GetReference

`func (o *PrepaidCardRedemptionType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *PrepaidCardRedemptionType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *PrepaidCardRedemptionType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *PrepaidCardRedemptionType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetTransactionCode

`func (o *PrepaidCardRedemptionType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *PrepaidCardRedemptionType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *PrepaidCardRedemptionType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *PrepaidCardRedemptionType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


