# TransactionDiversionsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**TransactionDiversions** | Pointer to [**ReservationTransactionDiversionsType**](ReservationTransactionDiversionsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewTransactionDiversionsInfo

`func NewTransactionDiversionsInfo() *TransactionDiversionsInfo`

NewTransactionDiversionsInfo instantiates a new TransactionDiversionsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionDiversionsInfoWithDefaults

`func NewTransactionDiversionsInfoWithDefaults() *TransactionDiversionsInfo`

NewTransactionDiversionsInfoWithDefaults instantiates a new TransactionDiversionsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TransactionDiversionsInfo) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TransactionDiversionsInfo) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TransactionDiversionsInfo) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TransactionDiversionsInfo) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *TransactionDiversionsInfo) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionDiversionsInfo) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionDiversionsInfo) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionDiversionsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *TransactionDiversionsInfo) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *TransactionDiversionsInfo) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *TransactionDiversionsInfo) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *TransactionDiversionsInfo) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetTransactionDiversions

`func (o *TransactionDiversionsInfo) GetTransactionDiversions() ReservationTransactionDiversionsType`

GetTransactionDiversions returns the TransactionDiversions field if non-nil, zero value otherwise.

### GetTransactionDiversionsOk

`func (o *TransactionDiversionsInfo) GetTransactionDiversionsOk() (*ReservationTransactionDiversionsType, bool)`

GetTransactionDiversionsOk returns a tuple with the TransactionDiversions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDiversions

`func (o *TransactionDiversionsInfo) SetTransactionDiversions(v ReservationTransactionDiversionsType)`

SetTransactionDiversions sets TransactionDiversions field to given value.

### HasTransactionDiversions

`func (o *TransactionDiversionsInfo) HasTransactionDiversions() bool`

HasTransactionDiversions returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionDiversionsInfo) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionDiversionsInfo) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionDiversionsInfo) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionDiversionsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


