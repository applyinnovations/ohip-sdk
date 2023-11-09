# PutCombineShareValidationsRequest

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

### NewPutCombineShareValidationsRequest

`func NewPutCombineShareValidationsRequest() *PutCombineShareValidationsRequest`

NewPutCombineShareValidationsRequest instantiates a new PutCombineShareValidationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCombineShareValidationsRequestWithDefaults

`func NewPutCombineShareValidationsRequestWithDefaults() *PutCombineShareValidationsRequest`

NewPutCombineShareValidationsRequestWithDefaults instantiates a new PutCombineShareValidationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExistingReservationId

`func (o *PutCombineShareValidationsRequest) GetExistingReservationId() UniqueIDType`

GetExistingReservationId returns the ExistingReservationId field if non-nil, zero value otherwise.

### GetExistingReservationIdOk

`func (o *PutCombineShareValidationsRequest) GetExistingReservationIdOk() (*UniqueIDType, bool)`

GetExistingReservationIdOk returns a tuple with the ExistingReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingReservationId

`func (o *PutCombineShareValidationsRequest) SetExistingReservationId(v UniqueIDType)`

SetExistingReservationId sets ExistingReservationId field to given value.

### HasExistingReservationId

`func (o *PutCombineShareValidationsRequest) HasExistingReservationId() bool`

HasExistingReservationId returns a boolean if a field has been set.

### GetHotelId

`func (o *PutCombineShareValidationsRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutCombineShareValidationsRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutCombineShareValidationsRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutCombineShareValidationsRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PutCombineShareValidationsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCombineShareValidationsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCombineShareValidationsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCombineShareValidationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNewReservation

`func (o *PutCombineShareValidationsRequest) GetNewReservation() CombineShareFromProfileType`

GetNewReservation returns the NewReservation field if non-nil, zero value otherwise.

### GetNewReservationOk

`func (o *PutCombineShareValidationsRequest) GetNewReservationOk() (*CombineShareFromProfileType, bool)`

GetNewReservationOk returns a tuple with the NewReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewReservation

`func (o *PutCombineShareValidationsRequest) SetNewReservation(v CombineShareFromProfileType)`

SetNewReservation sets NewReservation field to given value.

### HasNewReservation

`func (o *PutCombineShareValidationsRequest) HasNewReservation() bool`

HasNewReservation returns a boolean if a field has been set.

### GetShareToReservationId

`func (o *PutCombineShareValidationsRequest) GetShareToReservationId() UniqueIDType`

GetShareToReservationId returns the ShareToReservationId field if non-nil, zero value otherwise.

### GetShareToReservationIdOk

`func (o *PutCombineShareValidationsRequest) GetShareToReservationIdOk() (*UniqueIDType, bool)`

GetShareToReservationIdOk returns a tuple with the ShareToReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareToReservationId

`func (o *PutCombineShareValidationsRequest) SetShareToReservationId(v UniqueIDType)`

SetShareToReservationId sets ShareToReservationId field to given value.

### HasShareToReservationId

`func (o *PutCombineShareValidationsRequest) HasShareToReservationId() bool`

HasShareToReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCombineShareValidationsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCombineShareValidationsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCombineShareValidationsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCombineShareValidationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


