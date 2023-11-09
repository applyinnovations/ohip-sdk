# ChangeMarketGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MarketGroup** | Pointer to [**MarketGroupType**](MarketGroupType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeMarketGroupRequest

`func NewChangeMarketGroupRequest() *ChangeMarketGroupRequest`

NewChangeMarketGroupRequest instantiates a new ChangeMarketGroupRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeMarketGroupRequestWithDefaults

`func NewChangeMarketGroupRequestWithDefaults() *ChangeMarketGroupRequest`

NewChangeMarketGroupRequestWithDefaults instantiates a new ChangeMarketGroupRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeMarketGroupRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeMarketGroupRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeMarketGroupRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeMarketGroupRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMarketGroup

`func (o *ChangeMarketGroupRequest) GetMarketGroup() MarketGroupType`

GetMarketGroup returns the MarketGroup field if non-nil, zero value otherwise.

### GetMarketGroupOk

`func (o *ChangeMarketGroupRequest) GetMarketGroupOk() (*MarketGroupType, bool)`

GetMarketGroupOk returns a tuple with the MarketGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketGroup

`func (o *ChangeMarketGroupRequest) SetMarketGroup(v MarketGroupType)`

SetMarketGroup sets MarketGroup field to given value.

### HasMarketGroup

`func (o *ChangeMarketGroupRequest) HasMarketGroup() bool`

HasMarketGroup returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeMarketGroupRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeMarketGroupRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeMarketGroupRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeMarketGroupRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


