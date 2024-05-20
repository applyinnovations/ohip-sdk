# BlockPostingAccountReservationsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockPostingAccountReservations** | Pointer to [**[]BlockPostingReservationsType**](BlockPostingReservationsType.md) | Fetch block&#39;s posting account reservations information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewBlockPostingAccountReservationsInfo

`func NewBlockPostingAccountReservationsInfo() *BlockPostingAccountReservationsInfo`

NewBlockPostingAccountReservationsInfo instantiates a new BlockPostingAccountReservationsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockPostingAccountReservationsInfoWithDefaults

`func NewBlockPostingAccountReservationsInfoWithDefaults() *BlockPostingAccountReservationsInfo`

NewBlockPostingAccountReservationsInfoWithDefaults instantiates a new BlockPostingAccountReservationsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockPostingAccountReservations

`func (o *BlockPostingAccountReservationsInfo) GetBlockPostingAccountReservations() []BlockPostingReservationsType`

GetBlockPostingAccountReservations returns the BlockPostingAccountReservations field if non-nil, zero value otherwise.

### GetBlockPostingAccountReservationsOk

`func (o *BlockPostingAccountReservationsInfo) GetBlockPostingAccountReservationsOk() (*[]BlockPostingReservationsType, bool)`

GetBlockPostingAccountReservationsOk returns a tuple with the BlockPostingAccountReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockPostingAccountReservations

`func (o *BlockPostingAccountReservationsInfo) SetBlockPostingAccountReservations(v []BlockPostingReservationsType)`

SetBlockPostingAccountReservations sets BlockPostingAccountReservations field to given value.

### HasBlockPostingAccountReservations

`func (o *BlockPostingAccountReservationsInfo) HasBlockPostingAccountReservations() bool`

HasBlockPostingAccountReservations returns a boolean if a field has been set.

### GetLinks

`func (o *BlockPostingAccountReservationsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockPostingAccountReservationsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockPostingAccountReservationsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockPostingAccountReservationsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockPostingAccountReservationsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockPostingAccountReservationsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockPostingAccountReservationsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockPostingAccountReservationsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


