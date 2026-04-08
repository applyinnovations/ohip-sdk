# SpaceAreaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Area** | Pointer to **float32** | Room Area in Square Feet. | [optional] 
**Unit** | Pointer to [**SpaceAreaUnitType**](SpaceAreaUnitType.md) |  | [optional] 

## Methods

### NewSpaceAreaType

`func NewSpaceAreaType() *SpaceAreaType`

NewSpaceAreaType instantiates a new SpaceAreaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpaceAreaTypeWithDefaults

`func NewSpaceAreaTypeWithDefaults() *SpaceAreaType`

NewSpaceAreaTypeWithDefaults instantiates a new SpaceAreaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArea

`func (o *SpaceAreaType) GetArea() float32`

GetArea returns the Area field if non-nil, zero value otherwise.

### GetAreaOk

`func (o *SpaceAreaType) GetAreaOk() (*float32, bool)`

GetAreaOk returns a tuple with the Area field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArea

`func (o *SpaceAreaType) SetArea(v float32)`

SetArea sets Area field to given value.

### HasArea

`func (o *SpaceAreaType) HasArea() bool`

HasArea returns a boolean if a field has been set.

### GetUnit

`func (o *SpaceAreaType) GetUnit() SpaceAreaUnitType`

GetUnit returns the Unit field if non-nil, zero value otherwise.

### GetUnitOk

`func (o *SpaceAreaType) GetUnitOk() (*SpaceAreaUnitType, bool)`

GetUnitOk returns a tuple with the Unit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnit

`func (o *SpaceAreaType) SetUnit(v SpaceAreaUnitType)`

SetUnit sets Unit field to given value.

### HasUnit

`func (o *SpaceAreaType) HasUnit() bool`

HasUnit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


