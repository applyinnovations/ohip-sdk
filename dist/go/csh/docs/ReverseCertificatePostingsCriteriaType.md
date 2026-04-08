# ReverseCertificatePostingsCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code where the reservation transaction exists. | [optional] 
**ReservationNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TransactionList** | Pointer to **[]float32** | The unique transaction number of this transaction. | [optional] 
**ReasonCode** | Pointer to **string** | The reason code for the deletion. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewReverseCertificatePostingsCriteriaType

`func NewReverseCertificatePostingsCriteriaType() *ReverseCertificatePostingsCriteriaType`

NewReverseCertificatePostingsCriteriaType instantiates a new ReverseCertificatePostingsCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReverseCertificatePostingsCriteriaTypeWithDefaults

`func NewReverseCertificatePostingsCriteriaTypeWithDefaults() *ReverseCertificatePostingsCriteriaType`

NewReverseCertificatePostingsCriteriaTypeWithDefaults instantiates a new ReverseCertificatePostingsCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReverseCertificatePostingsCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReverseCertificatePostingsCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReverseCertificatePostingsCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReverseCertificatePostingsCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationNameId

`func (o *ReverseCertificatePostingsCriteriaType) GetReservationNameId() UniqueIDType`

GetReservationNameId returns the ReservationNameId field if non-nil, zero value otherwise.

### GetReservationNameIdOk

`func (o *ReverseCertificatePostingsCriteriaType) GetReservationNameIdOk() (*UniqueIDType, bool)`

GetReservationNameIdOk returns a tuple with the ReservationNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNameId

`func (o *ReverseCertificatePostingsCriteriaType) SetReservationNameId(v UniqueIDType)`

SetReservationNameId sets ReservationNameId field to given value.

### HasReservationNameId

`func (o *ReverseCertificatePostingsCriteriaType) HasReservationNameId() bool`

HasReservationNameId returns a boolean if a field has been set.

### GetTransactionList

`func (o *ReverseCertificatePostingsCriteriaType) GetTransactionList() []float32`

GetTransactionList returns the TransactionList field if non-nil, zero value otherwise.

### GetTransactionListOk

`func (o *ReverseCertificatePostingsCriteriaType) GetTransactionListOk() (*[]float32, bool)`

GetTransactionListOk returns a tuple with the TransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionList

`func (o *ReverseCertificatePostingsCriteriaType) SetTransactionList(v []float32)`

SetTransactionList sets TransactionList field to given value.

### HasTransactionList

`func (o *ReverseCertificatePostingsCriteriaType) HasTransactionList() bool`

HasTransactionList returns a boolean if a field has been set.

### GetReasonCode

`func (o *ReverseCertificatePostingsCriteriaType) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *ReverseCertificatePostingsCriteriaType) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *ReverseCertificatePostingsCriteriaType) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *ReverseCertificatePostingsCriteriaType) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.

### GetCashierId

`func (o *ReverseCertificatePostingsCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ReverseCertificatePostingsCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ReverseCertificatePostingsCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ReverseCertificatePostingsCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


