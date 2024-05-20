# ActivityStatSetType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**End** | Pointer to **string** |  | [optional] 
**Owner** | Pointer to **string** |  | [optional] 
**Start** | Pointer to **string** |  | [optional] 
**Stat** | Pointer to [**[]ActivityStatType**](ActivityStatType.md) |  | [optional] 

## Methods

### NewActivityStatSetType

`func NewActivityStatSetType() *ActivityStatSetType`

NewActivityStatSetType instantiates a new ActivityStatSetType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityStatSetTypeWithDefaults

`func NewActivityStatSetTypeWithDefaults() *ActivityStatSetType`

NewActivityStatSetTypeWithDefaults instantiates a new ActivityStatSetType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnd

`func (o *ActivityStatSetType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *ActivityStatSetType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *ActivityStatSetType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *ActivityStatSetType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetOwner

`func (o *ActivityStatSetType) GetOwner() string`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *ActivityStatSetType) GetOwnerOk() (*string, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *ActivityStatSetType) SetOwner(v string)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *ActivityStatSetType) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetStart

`func (o *ActivityStatSetType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *ActivityStatSetType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *ActivityStatSetType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *ActivityStatSetType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetStat

`func (o *ActivityStatSetType) GetStat() []ActivityStatType`

GetStat returns the Stat field if non-nil, zero value otherwise.

### GetStatOk

`func (o *ActivityStatSetType) GetStatOk() (*[]ActivityStatType, bool)`

GetStatOk returns a tuple with the Stat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStat

`func (o *ActivityStatSetType) SetStat(v []ActivityStatType)`

SetStat sets Stat field to given value.

### HasStat

`func (o *ActivityStatSetType) HasStat() bool`

HasStat returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


