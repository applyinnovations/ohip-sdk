# ProcessCommissionPaymentsCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property of the commission record . | [optional] 
**BankAccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AgentId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ResvNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CommissionId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**CheckNo** | Pointer to **float32** | If payment method is check, this serves as the start check number of checks to be printed. | [optional] 

## Methods

### NewProcessCommissionPaymentsCriteriaType

`func NewProcessCommissionPaymentsCriteriaType() *ProcessCommissionPaymentsCriteriaType`

NewProcessCommissionPaymentsCriteriaType instantiates a new ProcessCommissionPaymentsCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessCommissionPaymentsCriteriaTypeWithDefaults

`func NewProcessCommissionPaymentsCriteriaTypeWithDefaults() *ProcessCommissionPaymentsCriteriaType`

NewProcessCommissionPaymentsCriteriaTypeWithDefaults instantiates a new ProcessCommissionPaymentsCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ProcessCommissionPaymentsCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProcessCommissionPaymentsCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProcessCommissionPaymentsCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProcessCommissionPaymentsCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBankAccountId

`func (o *ProcessCommissionPaymentsCriteriaType) GetBankAccountId() UniqueIDType`

GetBankAccountId returns the BankAccountId field if non-nil, zero value otherwise.

### GetBankAccountIdOk

`func (o *ProcessCommissionPaymentsCriteriaType) GetBankAccountIdOk() (*UniqueIDType, bool)`

GetBankAccountIdOk returns a tuple with the BankAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountId

`func (o *ProcessCommissionPaymentsCriteriaType) SetBankAccountId(v UniqueIDType)`

SetBankAccountId sets BankAccountId field to given value.

### HasBankAccountId

`func (o *ProcessCommissionPaymentsCriteriaType) HasBankAccountId() bool`

HasBankAccountId returns a boolean if a field has been set.

### GetAgentId

`func (o *ProcessCommissionPaymentsCriteriaType) GetAgentId() UniqueIDType`

GetAgentId returns the AgentId field if non-nil, zero value otherwise.

### GetAgentIdOk

`func (o *ProcessCommissionPaymentsCriteriaType) GetAgentIdOk() (*UniqueIDType, bool)`

GetAgentIdOk returns a tuple with the AgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentId

`func (o *ProcessCommissionPaymentsCriteriaType) SetAgentId(v UniqueIDType)`

SetAgentId sets AgentId field to given value.

### HasAgentId

`func (o *ProcessCommissionPaymentsCriteriaType) HasAgentId() bool`

HasAgentId returns a boolean if a field has been set.

### GetResvNameId

`func (o *ProcessCommissionPaymentsCriteriaType) GetResvNameId() UniqueIDType`

GetResvNameId returns the ResvNameId field if non-nil, zero value otherwise.

### GetResvNameIdOk

`func (o *ProcessCommissionPaymentsCriteriaType) GetResvNameIdOk() (*UniqueIDType, bool)`

GetResvNameIdOk returns a tuple with the ResvNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvNameId

`func (o *ProcessCommissionPaymentsCriteriaType) SetResvNameId(v UniqueIDType)`

SetResvNameId sets ResvNameId field to given value.

### HasResvNameId

`func (o *ProcessCommissionPaymentsCriteriaType) HasResvNameId() bool`

HasResvNameId returns a boolean if a field has been set.

### GetCommissionId

`func (o *ProcessCommissionPaymentsCriteriaType) GetCommissionId() UniqueIDType`

GetCommissionId returns the CommissionId field if non-nil, zero value otherwise.

### GetCommissionIdOk

`func (o *ProcessCommissionPaymentsCriteriaType) GetCommissionIdOk() (*UniqueIDType, bool)`

GetCommissionIdOk returns a tuple with the CommissionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionId

`func (o *ProcessCommissionPaymentsCriteriaType) SetCommissionId(v UniqueIDType)`

SetCommissionId sets CommissionId field to given value.

### HasCommissionId

`func (o *ProcessCommissionPaymentsCriteriaType) HasCommissionId() bool`

HasCommissionId returns a boolean if a field has been set.

### GetTimeSpan

`func (o *ProcessCommissionPaymentsCriteriaType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *ProcessCommissionPaymentsCriteriaType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *ProcessCommissionPaymentsCriteriaType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *ProcessCommissionPaymentsCriteriaType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetCheckNo

`func (o *ProcessCommissionPaymentsCriteriaType) GetCheckNo() float32`

GetCheckNo returns the CheckNo field if non-nil, zero value otherwise.

### GetCheckNoOk

`func (o *ProcessCommissionPaymentsCriteriaType) GetCheckNoOk() (*float32, bool)`

GetCheckNoOk returns a tuple with the CheckNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNo

`func (o *ProcessCommissionPaymentsCriteriaType) SetCheckNo(v float32)`

SetCheckNo sets CheckNo field to given value.

### HasCheckNo

`func (o *ProcessCommissionPaymentsCriteriaType) HasCheckNo() bool`

HasCheckNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


