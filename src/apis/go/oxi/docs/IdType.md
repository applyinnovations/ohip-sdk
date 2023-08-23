# IdType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Used for Character Strings, length 0 to 20. | [optional] 
**Source** | Pointer to **string** |  | [optional] 

## Methods

### NewIdType

`func NewIdType() *IdType`

NewIdType instantiates a new IdType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdTypeWithDefaults

`func NewIdTypeWithDefaults() *IdType`

NewIdTypeWithDefaults instantiates a new IdType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *IdType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *IdType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *IdType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *IdType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSource

`func (o *IdType) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *IdType) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *IdType) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *IdType) HasSource() bool`

HasSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


