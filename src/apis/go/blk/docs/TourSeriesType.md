# TourSeriesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TourBlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TourCode** | Pointer to **string** | The tour code to be applied to the blocks that are part of this tour series. | [optional] 
**TourSeriesBlocks** | Pointer to [**[]TourSeriesBlockType**](TourSeriesBlockType.md) | Contains tour series blocks information. | [optional] 
**TourInstructions** | Pointer to [**TourSeriesTypeTourInstructions**](TourSeriesTypeTourInstructions.md) |  | [optional] 
**HotelId** | Pointer to **string** | The hotel code of the source block. | [optional] 

## Methods

### NewTourSeriesType

`func NewTourSeriesType() *TourSeriesType`

NewTourSeriesType instantiates a new TourSeriesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTourSeriesTypeWithDefaults

`func NewTourSeriesTypeWithDefaults() *TourSeriesType`

NewTourSeriesTypeWithDefaults instantiates a new TourSeriesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTourBlockId

`func (o *TourSeriesType) GetTourBlockId() UniqueIDType`

GetTourBlockId returns the TourBlockId field if non-nil, zero value otherwise.

### GetTourBlockIdOk

`func (o *TourSeriesType) GetTourBlockIdOk() (*UniqueIDType, bool)`

GetTourBlockIdOk returns a tuple with the TourBlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTourBlockId

`func (o *TourSeriesType) SetTourBlockId(v UniqueIDType)`

SetTourBlockId sets TourBlockId field to given value.

### HasTourBlockId

`func (o *TourSeriesType) HasTourBlockId() bool`

HasTourBlockId returns a boolean if a field has been set.

### GetTourCode

`func (o *TourSeriesType) GetTourCode() string`

GetTourCode returns the TourCode field if non-nil, zero value otherwise.

### GetTourCodeOk

`func (o *TourSeriesType) GetTourCodeOk() (*string, bool)`

GetTourCodeOk returns a tuple with the TourCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTourCode

`func (o *TourSeriesType) SetTourCode(v string)`

SetTourCode sets TourCode field to given value.

### HasTourCode

`func (o *TourSeriesType) HasTourCode() bool`

HasTourCode returns a boolean if a field has been set.

### GetTourSeriesBlocks

`func (o *TourSeriesType) GetTourSeriesBlocks() []TourSeriesBlockType`

GetTourSeriesBlocks returns the TourSeriesBlocks field if non-nil, zero value otherwise.

### GetTourSeriesBlocksOk

`func (o *TourSeriesType) GetTourSeriesBlocksOk() (*[]TourSeriesBlockType, bool)`

GetTourSeriesBlocksOk returns a tuple with the TourSeriesBlocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTourSeriesBlocks

`func (o *TourSeriesType) SetTourSeriesBlocks(v []TourSeriesBlockType)`

SetTourSeriesBlocks sets TourSeriesBlocks field to given value.

### HasTourSeriesBlocks

`func (o *TourSeriesType) HasTourSeriesBlocks() bool`

HasTourSeriesBlocks returns a boolean if a field has been set.

### GetTourInstructions

`func (o *TourSeriesType) GetTourInstructions() TourSeriesTypeTourInstructions`

GetTourInstructions returns the TourInstructions field if non-nil, zero value otherwise.

### GetTourInstructionsOk

`func (o *TourSeriesType) GetTourInstructionsOk() (*TourSeriesTypeTourInstructions, bool)`

GetTourInstructionsOk returns a tuple with the TourInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTourInstructions

`func (o *TourSeriesType) SetTourInstructions(v TourSeriesTypeTourInstructions)`

SetTourInstructions sets TourInstructions field to given value.

### HasTourInstructions

`func (o *TourSeriesType) HasTourInstructions() bool`

HasTourInstructions returns a boolean if a field has been set.

### GetHotelId

`func (o *TourSeriesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TourSeriesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TourSeriesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TourSeriesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


