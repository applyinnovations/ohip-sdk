# BlockOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Owners** | Pointer to [**BlockOwnersType**](BlockOwnersType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewBlockOwners

`func NewBlockOwners() *BlockOwners`

NewBlockOwners instantiates a new BlockOwners object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockOwnersWithDefaults

`func NewBlockOwnersWithDefaults() *BlockOwners`

NewBlockOwnersWithDefaults instantiates a new BlockOwners object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *BlockOwners) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockOwners) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockOwners) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockOwners) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOwners

`func (o *BlockOwners) GetOwners() BlockOwnersType`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *BlockOwners) GetOwnersOk() (*BlockOwnersType, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *BlockOwners) SetOwners(v BlockOwnersType)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *BlockOwners) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockOwners) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockOwners) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockOwners) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockOwners) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


