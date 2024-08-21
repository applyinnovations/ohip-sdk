# InterfaceRightsStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to **string** | Category code of this interface right. | [optional] 
**Description** | Pointer to **string** | User defined description for an Interface Right. | [optional] 
**Right** | Pointer to **int32** | Internal code for each allowed right of a Hotel Interface record. | [optional] 
**StatusCode** | Pointer to **string** | User defined code for an Interface Right. | [optional] 

## Methods

### NewInterfaceRightsStatusType

`func NewInterfaceRightsStatusType() *InterfaceRightsStatusType`

NewInterfaceRightsStatusType instantiates a new InterfaceRightsStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceRightsStatusTypeWithDefaults

`func NewInterfaceRightsStatusTypeWithDefaults() *InterfaceRightsStatusType`

NewInterfaceRightsStatusTypeWithDefaults instantiates a new InterfaceRightsStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *InterfaceRightsStatusType) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *InterfaceRightsStatusType) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *InterfaceRightsStatusType) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *InterfaceRightsStatusType) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetDescription

`func (o *InterfaceRightsStatusType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *InterfaceRightsStatusType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *InterfaceRightsStatusType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *InterfaceRightsStatusType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRight

`func (o *InterfaceRightsStatusType) GetRight() int32`

GetRight returns the Right field if non-nil, zero value otherwise.

### GetRightOk

`func (o *InterfaceRightsStatusType) GetRightOk() (*int32, bool)`

GetRightOk returns a tuple with the Right field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRight

`func (o *InterfaceRightsStatusType) SetRight(v int32)`

SetRight sets Right field to given value.

### HasRight

`func (o *InterfaceRightsStatusType) HasRight() bool`

HasRight returns a boolean if a field has been set.

### GetStatusCode

`func (o *InterfaceRightsStatusType) GetStatusCode() string`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *InterfaceRightsStatusType) GetStatusCodeOk() (*string, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *InterfaceRightsStatusType) SetStatusCode(v string)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *InterfaceRightsStatusType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


