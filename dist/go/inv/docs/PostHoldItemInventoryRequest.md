# PostHoldItemInventoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HoldItemInfo** | Pointer to [**HoldItemInventoryType**](HoldItemInventoryType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostHoldItemInventoryRequest

`func NewPostHoldItemInventoryRequest() *PostHoldItemInventoryRequest`

NewPostHoldItemInventoryRequest instantiates a new PostHoldItemInventoryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHoldItemInventoryRequestWithDefaults

`func NewPostHoldItemInventoryRequestWithDefaults() *PostHoldItemInventoryRequest`

NewPostHoldItemInventoryRequestWithDefaults instantiates a new PostHoldItemInventoryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHoldItemInfo

`func (o *PostHoldItemInventoryRequest) GetHoldItemInfo() HoldItemInventoryType`

GetHoldItemInfo returns the HoldItemInfo field if non-nil, zero value otherwise.

### GetHoldItemInfoOk

`func (o *PostHoldItemInventoryRequest) GetHoldItemInfoOk() (*HoldItemInventoryType, bool)`

GetHoldItemInfoOk returns a tuple with the HoldItemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldItemInfo

`func (o *PostHoldItemInventoryRequest) SetHoldItemInfo(v HoldItemInventoryType)`

SetHoldItemInfo sets HoldItemInfo field to given value.

### HasHoldItemInfo

`func (o *PostHoldItemInventoryRequest) HasHoldItemInfo() bool`

HasHoldItemInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PostHoldItemInventoryRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHoldItemInventoryRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHoldItemInventoryRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHoldItemInventoryRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHoldItemInventoryRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHoldItemInventoryRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHoldItemInventoryRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHoldItemInventoryRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


