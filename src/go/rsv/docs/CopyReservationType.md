# CopyReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**Instructions** | Pointer to [**CopyReservationTypeInstructions**](CopyReservationTypeInstructions.md) |  | [optional] 
**NewReservation** | Pointer to [**HotelReservationInstructionType**](HotelReservationInstructionType.md) |  | [optional] 
**SourceReservationId** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 

## Methods

### NewCopyReservationType

`func NewCopyReservationType() *CopyReservationType`

NewCopyReservationType instantiates a new CopyReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyReservationTypeWithDefaults

`func NewCopyReservationTypeWithDefaults() *CopyReservationType`

NewCopyReservationTypeWithDefaults instantiates a new CopyReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CopyReservationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyReservationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyReservationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyReservationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInstructions

`func (o *CopyReservationType) GetInstructions() CopyReservationTypeInstructions`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *CopyReservationType) GetInstructionsOk() (*CopyReservationTypeInstructions, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *CopyReservationType) SetInstructions(v CopyReservationTypeInstructions)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *CopyReservationType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetNewReservation

`func (o *CopyReservationType) GetNewReservation() HotelReservationInstructionType`

GetNewReservation returns the NewReservation field if non-nil, zero value otherwise.

### GetNewReservationOk

`func (o *CopyReservationType) GetNewReservationOk() (*HotelReservationInstructionType, bool)`

GetNewReservationOk returns a tuple with the NewReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewReservation

`func (o *CopyReservationType) SetNewReservation(v HotelReservationInstructionType)`

SetNewReservation sets NewReservation field to given value.

### HasNewReservation

`func (o *CopyReservationType) HasNewReservation() bool`

HasNewReservation returns a boolean if a field has been set.

### GetSourceReservationId

`func (o *CopyReservationType) GetSourceReservationId() UniqueIDListType`

GetSourceReservationId returns the SourceReservationId field if non-nil, zero value otherwise.

### GetSourceReservationIdOk

`func (o *CopyReservationType) GetSourceReservationIdOk() (*UniqueIDListType, bool)`

GetSourceReservationIdOk returns a tuple with the SourceReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceReservationId

`func (o *CopyReservationType) SetSourceReservationId(v UniqueIDListType)`

SetSourceReservationId sets SourceReservationId field to given value.

### HasSourceReservationId

`func (o *CopyReservationType) HasSourceReservationId() bool`

HasSourceReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


