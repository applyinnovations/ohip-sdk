# InventoryToBorrowInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BorrowCandidates** | Pointer to [**[]BorrowCandidateType**](BorrowCandidateType.md) | Contains the dates and rooms that can be borrowed from room types or House if the block is elastic. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewInventoryToBorrowInfo

`func NewInventoryToBorrowInfo() *InventoryToBorrowInfo`

NewInventoryToBorrowInfo instantiates a new InventoryToBorrowInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryToBorrowInfoWithDefaults

`func NewInventoryToBorrowInfoWithDefaults() *InventoryToBorrowInfo`

NewInventoryToBorrowInfoWithDefaults instantiates a new InventoryToBorrowInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBorrowCandidates

`func (o *InventoryToBorrowInfo) GetBorrowCandidates() []BorrowCandidateType`

GetBorrowCandidates returns the BorrowCandidates field if non-nil, zero value otherwise.

### GetBorrowCandidatesOk

`func (o *InventoryToBorrowInfo) GetBorrowCandidatesOk() (*[]BorrowCandidateType, bool)`

GetBorrowCandidatesOk returns a tuple with the BorrowCandidates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBorrowCandidates

`func (o *InventoryToBorrowInfo) SetBorrowCandidates(v []BorrowCandidateType)`

SetBorrowCandidates sets BorrowCandidates field to given value.

### HasBorrowCandidates

`func (o *InventoryToBorrowInfo) HasBorrowCandidates() bool`

HasBorrowCandidates returns a boolean if a field has been set.

### GetLinks

`func (o *InventoryToBorrowInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InventoryToBorrowInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InventoryToBorrowInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InventoryToBorrowInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *InventoryToBorrowInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InventoryToBorrowInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InventoryToBorrowInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InventoryToBorrowInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


