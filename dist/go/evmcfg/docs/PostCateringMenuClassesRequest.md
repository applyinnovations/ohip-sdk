# PostCateringMenuClassesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuClassList** | Pointer to [**[]CateringMenuClassType**](CateringMenuClassType.md) | List of Values of Menu. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCateringMenuClassesRequest

`func NewPostCateringMenuClassesRequest() *PostCateringMenuClassesRequest`

NewPostCateringMenuClassesRequest instantiates a new PostCateringMenuClassesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCateringMenuClassesRequestWithDefaults

`func NewPostCateringMenuClassesRequestWithDefaults() *PostCateringMenuClassesRequest`

NewPostCateringMenuClassesRequestWithDefaults instantiates a new PostCateringMenuClassesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMenuClassList

`func (o *PostCateringMenuClassesRequest) GetMenuClassList() []CateringMenuClassType`

GetMenuClassList returns the MenuClassList field if non-nil, zero value otherwise.

### GetMenuClassListOk

`func (o *PostCateringMenuClassesRequest) GetMenuClassListOk() (*[]CateringMenuClassType, bool)`

GetMenuClassListOk returns a tuple with the MenuClassList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuClassList

`func (o *PostCateringMenuClassesRequest) SetMenuClassList(v []CateringMenuClassType)`

SetMenuClassList sets MenuClassList field to given value.

### HasMenuClassList

`func (o *PostCateringMenuClassesRequest) HasMenuClassList() bool`

HasMenuClassList returns a boolean if a field has been set.

### GetLinks

`func (o *PostCateringMenuClassesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCateringMenuClassesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCateringMenuClassesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCateringMenuClassesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCateringMenuClassesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCateringMenuClassesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCateringMenuClassesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCateringMenuClassesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


