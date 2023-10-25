# PostItemClassesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemClasses** | Pointer to [**[]ItemClassType**](ItemClassType.md) | Holds Item Class details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostItemClassesRequest

`func NewPostItemClassesRequest() *PostItemClassesRequest`

NewPostItemClassesRequest instantiates a new PostItemClassesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostItemClassesRequestWithDefaults

`func NewPostItemClassesRequestWithDefaults() *PostItemClassesRequest`

NewPostItemClassesRequestWithDefaults instantiates a new PostItemClassesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItemClasses

`func (o *PostItemClassesRequest) GetItemClasses() []ItemClassType`

GetItemClasses returns the ItemClasses field if non-nil, zero value otherwise.

### GetItemClassesOk

`func (o *PostItemClassesRequest) GetItemClassesOk() (*[]ItemClassType, bool)`

GetItemClassesOk returns a tuple with the ItemClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClasses

`func (o *PostItemClassesRequest) SetItemClasses(v []ItemClassType)`

SetItemClasses sets ItemClasses field to given value.

### HasItemClasses

`func (o *PostItemClassesRequest) HasItemClasses() bool`

HasItemClasses returns a boolean if a field has been set.

### GetLinks

`func (o *PostItemClassesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostItemClassesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostItemClassesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostItemClassesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostItemClassesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostItemClassesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostItemClassesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostItemClassesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


