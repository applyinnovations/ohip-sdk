# PointsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardsType** | Pointer to **string** | Awards type for the award type rate code. | [optional] 
**Points** | Pointer to **int32** | No of points required to book this Room Stay. | [optional] 

## Methods

### NewPointsType

`func NewPointsType() *PointsType`

NewPointsType instantiates a new PointsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPointsTypeWithDefaults

`func NewPointsTypeWithDefaults() *PointsType`

NewPointsTypeWithDefaults instantiates a new PointsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardsType

`func (o *PointsType) GetAwardsType() string`

GetAwardsType returns the AwardsType field if non-nil, zero value otherwise.

### GetAwardsTypeOk

`func (o *PointsType) GetAwardsTypeOk() (*string, bool)`

GetAwardsTypeOk returns a tuple with the AwardsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardsType

`func (o *PointsType) SetAwardsType(v string)`

SetAwardsType sets AwardsType field to given value.

### HasAwardsType

`func (o *PointsType) HasAwardsType() bool`

HasAwardsType returns a boolean if a field has been set.

### GetPoints

`func (o *PointsType) GetPoints() int32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *PointsType) GetPointsOk() (*int32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *PointsType) SetPoints(v int32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *PointsType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


