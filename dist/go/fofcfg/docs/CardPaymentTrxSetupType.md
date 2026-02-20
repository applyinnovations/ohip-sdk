# CardPaymentTrxSetupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessingType** | Pointer to [**CardPaymentProcessingType**](CardPaymentProcessingType.md) |  | [optional] 
**AccountReceivable** | Pointer to [**ARAccountRefType**](ARAccountRefType.md) |  | [optional] 
**Commission** | Pointer to **float32** | Commission percentage on the payment. | [optional] 
**DisplayCode** | Pointer to **string** | Display code of the payment Transaction Code. | [optional] 
**InterfaceCode** | Pointer to **string** | Card Payment&#39;s internal interface code. | [optional] 

## Methods

### NewCardPaymentTrxSetupType

`func NewCardPaymentTrxSetupType() *CardPaymentTrxSetupType`

NewCardPaymentTrxSetupType instantiates a new CardPaymentTrxSetupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCardPaymentTrxSetupTypeWithDefaults

`func NewCardPaymentTrxSetupTypeWithDefaults() *CardPaymentTrxSetupType`

NewCardPaymentTrxSetupTypeWithDefaults instantiates a new CardPaymentTrxSetupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProcessingType

`func (o *CardPaymentTrxSetupType) GetProcessingType() CardPaymentProcessingType`

GetProcessingType returns the ProcessingType field if non-nil, zero value otherwise.

### GetProcessingTypeOk

`func (o *CardPaymentTrxSetupType) GetProcessingTypeOk() (*CardPaymentProcessingType, bool)`

GetProcessingTypeOk returns a tuple with the ProcessingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingType

`func (o *CardPaymentTrxSetupType) SetProcessingType(v CardPaymentProcessingType)`

SetProcessingType sets ProcessingType field to given value.

### HasProcessingType

`func (o *CardPaymentTrxSetupType) HasProcessingType() bool`

HasProcessingType returns a boolean if a field has been set.

### GetAccountReceivable

`func (o *CardPaymentTrxSetupType) GetAccountReceivable() ARAccountRefType`

GetAccountReceivable returns the AccountReceivable field if non-nil, zero value otherwise.

### GetAccountReceivableOk

`func (o *CardPaymentTrxSetupType) GetAccountReceivableOk() (*ARAccountRefType, bool)`

GetAccountReceivableOk returns a tuple with the AccountReceivable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountReceivable

`func (o *CardPaymentTrxSetupType) SetAccountReceivable(v ARAccountRefType)`

SetAccountReceivable sets AccountReceivable field to given value.

### HasAccountReceivable

`func (o *CardPaymentTrxSetupType) HasAccountReceivable() bool`

HasAccountReceivable returns a boolean if a field has been set.

### GetCommission

`func (o *CardPaymentTrxSetupType) GetCommission() float32`

GetCommission returns the Commission field if non-nil, zero value otherwise.

### GetCommissionOk

`func (o *CardPaymentTrxSetupType) GetCommissionOk() (*float32, bool)`

GetCommissionOk returns a tuple with the Commission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommission

`func (o *CardPaymentTrxSetupType) SetCommission(v float32)`

SetCommission sets Commission field to given value.

### HasCommission

`func (o *CardPaymentTrxSetupType) HasCommission() bool`

HasCommission returns a boolean if a field has been set.

### GetDisplayCode

`func (o *CardPaymentTrxSetupType) GetDisplayCode() string`

GetDisplayCode returns the DisplayCode field if non-nil, zero value otherwise.

### GetDisplayCodeOk

`func (o *CardPaymentTrxSetupType) GetDisplayCodeOk() (*string, bool)`

GetDisplayCodeOk returns a tuple with the DisplayCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayCode

`func (o *CardPaymentTrxSetupType) SetDisplayCode(v string)`

SetDisplayCode sets DisplayCode field to given value.

### HasDisplayCode

`func (o *CardPaymentTrxSetupType) HasDisplayCode() bool`

HasDisplayCode returns a boolean if a field has been set.

### GetInterfaceCode

`func (o *CardPaymentTrxSetupType) GetInterfaceCode() string`

GetInterfaceCode returns the InterfaceCode field if non-nil, zero value otherwise.

### GetInterfaceCodeOk

`func (o *CardPaymentTrxSetupType) GetInterfaceCodeOk() (*string, bool)`

GetInterfaceCodeOk returns a tuple with the InterfaceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceCode

`func (o *CardPaymentTrxSetupType) SetInterfaceCode(v string)`

SetInterfaceCode sets InterfaceCode field to given value.

### HasInterfaceCode

`func (o *CardPaymentTrxSetupType) HasInterfaceCode() bool`

HasInterfaceCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


