# CopyCateringMenusRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyCateringMenus** | Pointer to [**CopyCateringMenuType**](CopyCateringMenuType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyCateringMenusRequest

`func NewCopyCateringMenusRequest() *CopyCateringMenusRequest`

NewCopyCateringMenusRequest instantiates a new CopyCateringMenusRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyCateringMenusRequestWithDefaults

`func NewCopyCateringMenusRequestWithDefaults() *CopyCateringMenusRequest`

NewCopyCateringMenusRequestWithDefaults instantiates a new CopyCateringMenusRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyCateringMenus

`func (o *CopyCateringMenusRequest) GetCopyCateringMenus() CopyCateringMenuType`

GetCopyCateringMenus returns the CopyCateringMenus field if non-nil, zero value otherwise.

### GetCopyCateringMenusOk

`func (o *CopyCateringMenusRequest) GetCopyCateringMenusOk() (*CopyCateringMenuType, bool)`

GetCopyCateringMenusOk returns a tuple with the CopyCateringMenus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyCateringMenus

`func (o *CopyCateringMenusRequest) SetCopyCateringMenus(v CopyCateringMenuType)`

SetCopyCateringMenus sets CopyCateringMenus field to given value.

### HasCopyCateringMenus

`func (o *CopyCateringMenusRequest) HasCopyCateringMenus() bool`

HasCopyCateringMenus returns a boolean if a field has been set.

### GetLinks

`func (o *CopyCateringMenusRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyCateringMenusRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyCateringMenusRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyCateringMenusRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyCateringMenusRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyCateringMenusRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyCateringMenusRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyCateringMenusRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


