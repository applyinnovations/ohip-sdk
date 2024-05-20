# LinkedAllowanceReservationsInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The resort code. | [optional] 
**SourceReservations** | Pointer to [**[]LinkedAllowanceReservationInfoType**](LinkedAllowanceReservationInfoType.md) | List of Package Allowance Source reservations. | [optional] 
**TargetReservation** | Pointer to [**LinkedAllowanceReservationInfoType**](LinkedAllowanceReservationInfoType.md) |  | [optional] 

## Methods

### NewLinkedAllowanceReservationsInfoType

`func NewLinkedAllowanceReservationsInfoType() *LinkedAllowanceReservationsInfoType`

NewLinkedAllowanceReservationsInfoType instantiates a new LinkedAllowanceReservationsInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedAllowanceReservationsInfoTypeWithDefaults

`func NewLinkedAllowanceReservationsInfoTypeWithDefaults() *LinkedAllowanceReservationsInfoType`

NewLinkedAllowanceReservationsInfoTypeWithDefaults instantiates a new LinkedAllowanceReservationsInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *LinkedAllowanceReservationsInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *LinkedAllowanceReservationsInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *LinkedAllowanceReservationsInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *LinkedAllowanceReservationsInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSourceReservations

`func (o *LinkedAllowanceReservationsInfoType) GetSourceReservations() []LinkedAllowanceReservationInfoType`

GetSourceReservations returns the SourceReservations field if non-nil, zero value otherwise.

### GetSourceReservationsOk

`func (o *LinkedAllowanceReservationsInfoType) GetSourceReservationsOk() (*[]LinkedAllowanceReservationInfoType, bool)`

GetSourceReservationsOk returns a tuple with the SourceReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceReservations

`func (o *LinkedAllowanceReservationsInfoType) SetSourceReservations(v []LinkedAllowanceReservationInfoType)`

SetSourceReservations sets SourceReservations field to given value.

### HasSourceReservations

`func (o *LinkedAllowanceReservationsInfoType) HasSourceReservations() bool`

HasSourceReservations returns a boolean if a field has been set.

### GetTargetReservation

`func (o *LinkedAllowanceReservationsInfoType) GetTargetReservation() LinkedAllowanceReservationInfoType`

GetTargetReservation returns the TargetReservation field if non-nil, zero value otherwise.

### GetTargetReservationOk

`func (o *LinkedAllowanceReservationsInfoType) GetTargetReservationOk() (*LinkedAllowanceReservationInfoType, bool)`

GetTargetReservationOk returns a tuple with the TargetReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetReservation

`func (o *LinkedAllowanceReservationsInfoType) SetTargetReservation(v LinkedAllowanceReservationInfoType)`

SetTargetReservation sets TargetReservation field to given value.

### HasTargetReservation

`func (o *LinkedAllowanceReservationsInfoType) HasTargetReservation() bool`

HasTargetReservation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


