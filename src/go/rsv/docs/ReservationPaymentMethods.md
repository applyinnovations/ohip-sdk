# ReservationPaymentMethods

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationPaymentMethods** | Pointer to [**ReservationPaymentMethodsType**](ReservationPaymentMethodsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewReservationPaymentMethods

`func NewReservationPaymentMethods() *ReservationPaymentMethods`

NewReservationPaymentMethods instantiates a new ReservationPaymentMethods object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPaymentMethodsWithDefaults

`func NewReservationPaymentMethodsWithDefaults() *ReservationPaymentMethods`

NewReservationPaymentMethodsWithDefaults instantiates a new ReservationPaymentMethods object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationPaymentMethods) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationPaymentMethods) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationPaymentMethods) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationPaymentMethods) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationPaymentMethods) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationPaymentMethods) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationPaymentMethods) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationPaymentMethods) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationPaymentMethods) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationPaymentMethods) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationPaymentMethods) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationPaymentMethods) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationPaymentMethods

`func (o *ReservationPaymentMethods) GetReservationPaymentMethods() ReservationPaymentMethodsType`

GetReservationPaymentMethods returns the ReservationPaymentMethods field if non-nil, zero value otherwise.

### GetReservationPaymentMethodsOk

`func (o *ReservationPaymentMethods) GetReservationPaymentMethodsOk() (*ReservationPaymentMethodsType, bool)`

GetReservationPaymentMethodsOk returns a tuple with the ReservationPaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethods

`func (o *ReservationPaymentMethods) SetReservationPaymentMethods(v ReservationPaymentMethodsType)`

SetReservationPaymentMethods sets ReservationPaymentMethods field to given value.

### HasReservationPaymentMethods

`func (o *ReservationPaymentMethods) HasReservationPaymentMethods() bool`

HasReservationPaymentMethods returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationPaymentMethods) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationPaymentMethods) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationPaymentMethods) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationPaymentMethods) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


