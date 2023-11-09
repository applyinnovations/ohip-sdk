# CombineShareValidations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExistingReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**NewReservation** | Pointer to [**CombineShareFromProfileType**](CombineShareFromProfileType.md) |  | [optional] 
**ShareToReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCombineShareValidations

`func NewCombineShareValidations() *CombineShareValidations`

NewCombineShareValidations instantiates a new CombineShareValidations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCombineShareValidationsWithDefaults

`func NewCombineShareValidationsWithDefaults() *CombineShareValidations`

NewCombineShareValidationsWithDefaults instantiates a new CombineShareValidations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExistingReservationId

`func (o *CombineShareValidations) GetExistingReservationId() UniqueIDType`

GetExistingReservationId returns the ExistingReservationId field if non-nil, zero value otherwise.

### GetExistingReservationIdOk

`func (o *CombineShareValidations) GetExistingReservationIdOk() (*UniqueIDType, bool)`

GetExistingReservationIdOk returns a tuple with the ExistingReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingReservationId

`func (o *CombineShareValidations) SetExistingReservationId(v UniqueIDType)`

SetExistingReservationId sets ExistingReservationId field to given value.

### HasExistingReservationId

`func (o *CombineShareValidations) HasExistingReservationId() bool`

HasExistingReservationId returns a boolean if a field has been set.

### GetHotelId

`func (o *CombineShareValidations) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CombineShareValidations) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CombineShareValidations) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CombineShareValidations) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *CombineShareValidations) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CombineShareValidations) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CombineShareValidations) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CombineShareValidations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNewReservation

`func (o *CombineShareValidations) GetNewReservation() CombineShareFromProfileType`

GetNewReservation returns the NewReservation field if non-nil, zero value otherwise.

### GetNewReservationOk

`func (o *CombineShareValidations) GetNewReservationOk() (*CombineShareFromProfileType, bool)`

GetNewReservationOk returns a tuple with the NewReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewReservation

`func (o *CombineShareValidations) SetNewReservation(v CombineShareFromProfileType)`

SetNewReservation sets NewReservation field to given value.

### HasNewReservation

`func (o *CombineShareValidations) HasNewReservation() bool`

HasNewReservation returns a boolean if a field has been set.

### GetShareToReservationId

`func (o *CombineShareValidations) GetShareToReservationId() UniqueIDType`

GetShareToReservationId returns the ShareToReservationId field if non-nil, zero value otherwise.

### GetShareToReservationIdOk

`func (o *CombineShareValidations) GetShareToReservationIdOk() (*UniqueIDType, bool)`

GetShareToReservationIdOk returns a tuple with the ShareToReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareToReservationId

`func (o *CombineShareValidations) SetShareToReservationId(v UniqueIDType)`

SetShareToReservationId sets ShareToReservationId field to given value.

### HasShareToReservationId

`func (o *CombineShareValidations) HasShareToReservationId() bool`

HasShareToReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *CombineShareValidations) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CombineShareValidations) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CombineShareValidations) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CombineShareValidations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


