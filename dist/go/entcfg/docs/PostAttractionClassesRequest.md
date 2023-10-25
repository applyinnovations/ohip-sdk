# PostAttractionClassesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttractionClasses** | Pointer to [**[]AttractionClassType**](AttractionClassType.md) | List of Attraction Classes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostAttractionClassesRequest

`func NewPostAttractionClassesRequest() *PostAttractionClassesRequest`

NewPostAttractionClassesRequest instantiates a new PostAttractionClassesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAttractionClassesRequestWithDefaults

`func NewPostAttractionClassesRequestWithDefaults() *PostAttractionClassesRequest`

NewPostAttractionClassesRequestWithDefaults instantiates a new PostAttractionClassesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttractionClasses

`func (o *PostAttractionClassesRequest) GetAttractionClasses() []AttractionClassType`

GetAttractionClasses returns the AttractionClasses field if non-nil, zero value otherwise.

### GetAttractionClassesOk

`func (o *PostAttractionClassesRequest) GetAttractionClassesOk() (*[]AttractionClassType, bool)`

GetAttractionClassesOk returns a tuple with the AttractionClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttractionClasses

`func (o *PostAttractionClassesRequest) SetAttractionClasses(v []AttractionClassType)`

SetAttractionClasses sets AttractionClasses field to given value.

### HasAttractionClasses

`func (o *PostAttractionClassesRequest) HasAttractionClasses() bool`

HasAttractionClasses returns a boolean if a field has been set.

### GetLinks

`func (o *PostAttractionClassesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAttractionClassesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAttractionClassesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAttractionClassesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAttractionClassesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAttractionClassesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAttractionClassesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAttractionClassesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


