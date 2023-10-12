# PostBillingChargesInBatchCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the charges are to be posted. | [optional] 
**Charges** | Pointer to [**[]ChargeCriteriaType**](ChargeCriteriaType.md) | Collection of Charges to be posted. | [optional] 
**Reservations** | Pointer to [**[]ReservationId**](ReservationId.md) | Unique identifier for a reservation. | [optional] 

## Methods

### NewPostBillingChargesInBatchCriteriaType

`func NewPostBillingChargesInBatchCriteriaType() *PostBillingChargesInBatchCriteriaType`

NewPostBillingChargesInBatchCriteriaType instantiates a new PostBillingChargesInBatchCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBillingChargesInBatchCriteriaTypeWithDefaults

`func NewPostBillingChargesInBatchCriteriaTypeWithDefaults() *PostBillingChargesInBatchCriteriaType`

NewPostBillingChargesInBatchCriteriaTypeWithDefaults instantiates a new PostBillingChargesInBatchCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostBillingChargesInBatchCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostBillingChargesInBatchCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostBillingChargesInBatchCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostBillingChargesInBatchCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCharges

`func (o *PostBillingChargesInBatchCriteriaType) GetCharges() []ChargeCriteriaType`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *PostBillingChargesInBatchCriteriaType) GetChargesOk() (*[]ChargeCriteriaType, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *PostBillingChargesInBatchCriteriaType) SetCharges(v []ChargeCriteriaType)`

SetCharges sets Charges field to given value.

### HasCharges

`func (o *PostBillingChargesInBatchCriteriaType) HasCharges() bool`

HasCharges returns a boolean if a field has been set.

### GetReservations

`func (o *PostBillingChargesInBatchCriteriaType) GetReservations() []ReservationId`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *PostBillingChargesInBatchCriteriaType) GetReservationsOk() (*[]ReservationId, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *PostBillingChargesInBatchCriteriaType) SetReservations(v []ReservationId)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *PostBillingChargesInBatchCriteriaType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


