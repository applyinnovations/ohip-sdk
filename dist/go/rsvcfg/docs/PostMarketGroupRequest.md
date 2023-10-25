# PostMarketGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MarketGroup** | Pointer to [**MarketGroupType**](MarketGroupType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMarketGroupRequest

`func NewPostMarketGroupRequest() *PostMarketGroupRequest`

NewPostMarketGroupRequest instantiates a new PostMarketGroupRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMarketGroupRequestWithDefaults

`func NewPostMarketGroupRequestWithDefaults() *PostMarketGroupRequest`

NewPostMarketGroupRequestWithDefaults instantiates a new PostMarketGroupRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMarketGroupRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMarketGroupRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMarketGroupRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMarketGroupRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMarketGroup

`func (o *PostMarketGroupRequest) GetMarketGroup() MarketGroupType`

GetMarketGroup returns the MarketGroup field if non-nil, zero value otherwise.

### GetMarketGroupOk

`func (o *PostMarketGroupRequest) GetMarketGroupOk() (*MarketGroupType, bool)`

GetMarketGroupOk returns a tuple with the MarketGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketGroup

`func (o *PostMarketGroupRequest) SetMarketGroup(v MarketGroupType)`

SetMarketGroup sets MarketGroup field to given value.

### HasMarketGroup

`func (o *PostMarketGroupRequest) HasMarketGroup() bool`

HasMarketGroup returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMarketGroupRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMarketGroupRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMarketGroupRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMarketGroupRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


