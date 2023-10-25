# PostCateringMenusRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MenuList** | Pointer to [**[]CateringMenuType**](CateringMenuType.md) | List of Values of Menu. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCateringMenusRequest

`func NewPostCateringMenusRequest() *PostCateringMenusRequest`

NewPostCateringMenusRequest instantiates a new PostCateringMenusRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCateringMenusRequestWithDefaults

`func NewPostCateringMenusRequestWithDefaults() *PostCateringMenusRequest`

NewPostCateringMenusRequestWithDefaults instantiates a new PostCateringMenusRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostCateringMenusRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCateringMenusRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCateringMenusRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCateringMenusRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMenuList

`func (o *PostCateringMenusRequest) GetMenuList() []CateringMenuType`

GetMenuList returns the MenuList field if non-nil, zero value otherwise.

### GetMenuListOk

`func (o *PostCateringMenusRequest) GetMenuListOk() (*[]CateringMenuType, bool)`

GetMenuListOk returns a tuple with the MenuList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuList

`func (o *PostCateringMenusRequest) SetMenuList(v []CateringMenuType)`

SetMenuList sets MenuList field to given value.

### HasMenuList

`func (o *PostCateringMenusRequest) HasMenuList() bool`

HasMenuList returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCateringMenusRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCateringMenusRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCateringMenusRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCateringMenusRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


