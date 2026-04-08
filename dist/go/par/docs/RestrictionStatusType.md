# RestrictionStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to [**RestrictionStatusesType**](RestrictionStatusesType.md) |  | [optional] 
**Unit** | Pointer to **int32** | Defines restriction in conjunction with Restriction Code. Value must be specified for Restriction Codes MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking. | [optional] 
**LOS1** | Pointer to **bool** | Indicates Length of Stay 1 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS2** | Pointer to **bool** | Indicates Length of Stay 2 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS3** | Pointer to **bool** | Indicates Length of Stay 3 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS4** | Pointer to **bool** | Indicates Length of Stay 4 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS5** | Pointer to **bool** | Indicates Length of Stay 5 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS6** | Pointer to **bool** | Indicates Length of Stay 6 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS7** | Pointer to **bool** | Indicates Length of Stay 7 or more is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 

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

### GetLOS1

`func (o *RestrictionStatusType) GetLOS1() bool`

GetLOS1 returns the LOS1 field if non-nil, zero value otherwise.

### GetLOS1Ok

`func (o *RestrictionStatusType) GetLOS1Ok() (*bool, bool)`

GetLOS1Ok returns a tuple with the LOS1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS1

`func (o *RestrictionStatusType) SetLOS1(v bool)`

SetLOS1 sets LOS1 field to given value.

### HasLOS1

`func (o *RestrictionStatusType) HasLOS1() bool`

HasLOS1 returns a boolean if a field has been set.

### GetLOS2

`func (o *RestrictionStatusType) GetLOS2() bool`

GetLOS2 returns the LOS2 field if non-nil, zero value otherwise.

### GetLOS2Ok

`func (o *RestrictionStatusType) GetLOS2Ok() (*bool, bool)`

GetLOS2Ok returns a tuple with the LOS2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS2

`func (o *RestrictionStatusType) SetLOS2(v bool)`

SetLOS2 sets LOS2 field to given value.

### HasLOS2

`func (o *RestrictionStatusType) HasLOS2() bool`

HasLOS2 returns a boolean if a field has been set.

### GetLOS3

`func (o *RestrictionStatusType) GetLOS3() bool`

GetLOS3 returns the LOS3 field if non-nil, zero value otherwise.

### GetLOS3Ok

`func (o *RestrictionStatusType) GetLOS3Ok() (*bool, bool)`

GetLOS3Ok returns a tuple with the LOS3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS3

`func (o *RestrictionStatusType) SetLOS3(v bool)`

SetLOS3 sets LOS3 field to given value.

### HasLOS3

`func (o *RestrictionStatusType) HasLOS3() bool`

HasLOS3 returns a boolean if a field has been set.

### GetLOS4

`func (o *RestrictionStatusType) GetLOS4() bool`

GetLOS4 returns the LOS4 field if non-nil, zero value otherwise.

### GetLOS4Ok

`func (o *RestrictionStatusType) GetLOS4Ok() (*bool, bool)`

GetLOS4Ok returns a tuple with the LOS4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS4

`func (o *RestrictionStatusType) SetLOS4(v bool)`

SetLOS4 sets LOS4 field to given value.

### HasLOS4

`func (o *RestrictionStatusType) HasLOS4() bool`

HasLOS4 returns a boolean if a field has been set.

### GetLOS5

`func (o *RestrictionStatusType) GetLOS5() bool`

GetLOS5 returns the LOS5 field if non-nil, zero value otherwise.

### GetLOS5Ok

`func (o *RestrictionStatusType) GetLOS5Ok() (*bool, bool)`

GetLOS5Ok returns a tuple with the LOS5 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS5

`func (o *RestrictionStatusType) SetLOS5(v bool)`

SetLOS5 sets LOS5 field to given value.

### HasLOS5

`func (o *RestrictionStatusType) HasLOS5() bool`

HasLOS5 returns a boolean if a field has been set.

### GetLOS6

`func (o *RestrictionStatusType) GetLOS6() bool`

GetLOS6 returns the LOS6 field if non-nil, zero value otherwise.

### GetLOS6Ok

`func (o *RestrictionStatusType) GetLOS6Ok() (*bool, bool)`

GetLOS6Ok returns a tuple with the LOS6 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS6

`func (o *RestrictionStatusType) SetLOS6(v bool)`

SetLOS6 sets LOS6 field to given value.

### HasLOS6

`func (o *RestrictionStatusType) HasLOS6() bool`

HasLOS6 returns a boolean if a field has been set.

### GetLOS7

`func (o *RestrictionStatusType) GetLOS7() bool`

GetLOS7 returns the LOS7 field if non-nil, zero value otherwise.

### GetLOS7Ok

`func (o *RestrictionStatusType) GetLOS7Ok() (*bool, bool)`

GetLOS7Ok returns a tuple with the LOS7 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS7

`func (o *RestrictionStatusType) SetLOS7(v bool)`

SetLOS7 sets LOS7 field to given value.

### HasLOS7

`func (o *RestrictionStatusType) HasLOS7() bool`

HasLOS7 returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


