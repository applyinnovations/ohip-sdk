# RestrictionStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to [**RestrictionStatusesType**](RestrictionStatusesType.md) |  | [optional] 
**Unit** | Pointer to **int32** | Defines restriction in conjunction with Restriction Code. Value must be specified for Restriction Codes MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking. | [optional] 

## Methods

### NewRestrictionStatusType

`func NewRestrictionStatusType() *RestrictionStatusType`

NewRestrictionStatusType instantiates a new RestrictionStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRestrictionStatusTypeWithDefaults

`func NewRestrictionStatusTypeWithDefaults() *RestrictionStatusType`

NewRestrictionStatusTypeWithDefaults instantiates a new RestrictionStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RestrictionStatusType) GetCode() RestrictionStatusesType`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RestrictionStatusType) GetCodeOk() (*RestrictionStatusesType, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RestrictionStatusType) SetCode(v RestrictionStatusesType)`

SetCode sets Code field to given value.

### HasCode

`func (o *RestrictionStatusType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetUnit

`func (o *RestrictionStatusType) GetUnit() int32`

GetUnit returns the Unit field if non-nil, zero value otherwise.

### GetUnitOk

`func (o *RestrictionStatusType) GetUnitOk() (*int32, bool)`

GetUnitOk returns a tuple with the Unit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnit

`func (o *RestrictionStatusType) SetUnit(v int32)`

SetUnit sets Unit field to given value.

### HasUnit

`func (o *RestrictionStatusType) HasUnit() bool`

HasUnit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


