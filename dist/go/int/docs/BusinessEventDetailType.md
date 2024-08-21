# BusinessEventDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataElement** | Pointer to **string** | Name of the data element, such as arrival date, departure date, etc. | [optional] 
**ElementRole** | Pointer to **string** | Element role used to correlate fields of each record, when a collection of records is represented, such as phone role for phones. | [optional] 
**ElementSequence** | Pointer to **int32** | Sequence number used to correlate fields of each record, when a collection of records is represented. | [optional] 
**ElementType** | Pointer to **string** | Element type used to correlate fields of each record, when a collection of records is represented, such as phone type for phones. | [optional] 
**NewValue** | Pointer to **string** | Value of the element after this action took place. In case of date values, format used is YYYY-MM-DD. | [optional] 
**OldValue** | Pointer to **string** | Value of the element when this action took place. In case of date values, format used is YYYY-MM-DD. | [optional] 
**ScopeFrom** | Pointer to **string** | Begin date from when this value is applicable, such as daily element date, block grid date etc. | [optional] 
**ScopeTo** | Pointer to **string** | End date till when this value is applicable, such as daily element date, block grid date etc. | [optional] 

## Methods

### NewBusinessEventDetailType

`func NewBusinessEventDetailType() *BusinessEventDetailType`

NewBusinessEventDetailType instantiates a new BusinessEventDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessEventDetailTypeWithDefaults

`func NewBusinessEventDetailTypeWithDefaults() *BusinessEventDetailType`

NewBusinessEventDetailTypeWithDefaults instantiates a new BusinessEventDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataElement

`func (o *BusinessEventDetailType) GetDataElement() string`

GetDataElement returns the DataElement field if non-nil, zero value otherwise.

### GetDataElementOk

`func (o *BusinessEventDetailType) GetDataElementOk() (*string, bool)`

GetDataElementOk returns a tuple with the DataElement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataElement

`func (o *BusinessEventDetailType) SetDataElement(v string)`

SetDataElement sets DataElement field to given value.

### HasDataElement

`func (o *BusinessEventDetailType) HasDataElement() bool`

HasDataElement returns a boolean if a field has been set.

### GetElementRole

`func (o *BusinessEventDetailType) GetElementRole() string`

GetElementRole returns the ElementRole field if non-nil, zero value otherwise.

### GetElementRoleOk

`func (o *BusinessEventDetailType) GetElementRoleOk() (*string, bool)`

GetElementRoleOk returns a tuple with the ElementRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElementRole

`func (o *BusinessEventDetailType) SetElementRole(v string)`

SetElementRole sets ElementRole field to given value.

### HasElementRole

`func (o *BusinessEventDetailType) HasElementRole() bool`

HasElementRole returns a boolean if a field has been set.

### GetElementSequence

`func (o *BusinessEventDetailType) GetElementSequence() int32`

GetElementSequence returns the ElementSequence field if non-nil, zero value otherwise.

### GetElementSequenceOk

`func (o *BusinessEventDetailType) GetElementSequenceOk() (*int32, bool)`

GetElementSequenceOk returns a tuple with the ElementSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElementSequence

`func (o *BusinessEventDetailType) SetElementSequence(v int32)`

SetElementSequence sets ElementSequence field to given value.

### HasElementSequence

`func (o *BusinessEventDetailType) HasElementSequence() bool`

HasElementSequence returns a boolean if a field has been set.

### GetElementType

`func (o *BusinessEventDetailType) GetElementType() string`

GetElementType returns the ElementType field if non-nil, zero value otherwise.

### GetElementTypeOk

`func (o *BusinessEventDetailType) GetElementTypeOk() (*string, bool)`

GetElementTypeOk returns a tuple with the ElementType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElementType

`func (o *BusinessEventDetailType) SetElementType(v string)`

SetElementType sets ElementType field to given value.

### HasElementType

`func (o *BusinessEventDetailType) HasElementType() bool`

HasElementType returns a boolean if a field has been set.

### GetNewValue

`func (o *BusinessEventDetailType) GetNewValue() string`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *BusinessEventDetailType) GetNewValueOk() (*string, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *BusinessEventDetailType) SetNewValue(v string)`

SetNewValue sets NewValue field to given value.

### HasNewValue

`func (o *BusinessEventDetailType) HasNewValue() bool`

HasNewValue returns a boolean if a field has been set.

### GetOldValue

`func (o *BusinessEventDetailType) GetOldValue() string`

GetOldValue returns the OldValue field if non-nil, zero value otherwise.

### GetOldValueOk

`func (o *BusinessEventDetailType) GetOldValueOk() (*string, bool)`

GetOldValueOk returns a tuple with the OldValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldValue

`func (o *BusinessEventDetailType) SetOldValue(v string)`

SetOldValue sets OldValue field to given value.

### HasOldValue

`func (o *BusinessEventDetailType) HasOldValue() bool`

HasOldValue returns a boolean if a field has been set.

### GetScopeFrom

`func (o *BusinessEventDetailType) GetScopeFrom() string`

GetScopeFrom returns the ScopeFrom field if non-nil, zero value otherwise.

### GetScopeFromOk

`func (o *BusinessEventDetailType) GetScopeFromOk() (*string, bool)`

GetScopeFromOk returns a tuple with the ScopeFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeFrom

`func (o *BusinessEventDetailType) SetScopeFrom(v string)`

SetScopeFrom sets ScopeFrom field to given value.

### HasScopeFrom

`func (o *BusinessEventDetailType) HasScopeFrom() bool`

HasScopeFrom returns a boolean if a field has been set.

### GetScopeTo

`func (o *BusinessEventDetailType) GetScopeTo() string`

GetScopeTo returns the ScopeTo field if non-nil, zero value otherwise.

### GetScopeToOk

`func (o *BusinessEventDetailType) GetScopeToOk() (*string, bool)`

GetScopeToOk returns a tuple with the ScopeTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeTo

`func (o *BusinessEventDetailType) SetScopeTo(v string)`

SetScopeTo sets ScopeTo field to given value.

### HasScopeTo

`func (o *BusinessEventDetailType) HasScopeTo() bool`

HasScopeTo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


