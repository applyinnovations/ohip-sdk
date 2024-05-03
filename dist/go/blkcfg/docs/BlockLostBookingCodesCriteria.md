# BlockLostBookingCodesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockLostBookingCodes** | Pointer to [**[]BlockLostBookingCodeType**](BlockLostBookingCodeType.md) | List of Block Lost Booking Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockLostBookingCodesCriteria

`func NewBlockLostBookingCodesCriteria() *BlockLostBookingCodesCriteria`

NewBlockLostBookingCodesCriteria instantiates a new BlockLostBookingCodesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockLostBookingCodesCriteriaWithDefaults

`func NewBlockLostBookingCodesCriteriaWithDefaults() *BlockLostBookingCodesCriteria`

NewBlockLostBookingCodesCriteriaWithDefaults instantiates a new BlockLostBookingCodesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockLostBookingCodes

`func (o *BlockLostBookingCodesCriteria) GetBlockLostBookingCodes() []BlockLostBookingCodeType`

GetBlockLostBookingCodes returns the BlockLostBookingCodes field if non-nil, zero value otherwise.

### GetBlockLostBookingCodesOk

`func (o *BlockLostBookingCodesCriteria) GetBlockLostBookingCodesOk() (*[]BlockLostBookingCodeType, bool)`

GetBlockLostBookingCodesOk returns a tuple with the BlockLostBookingCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockLostBookingCodes

`func (o *BlockLostBookingCodesCriteria) SetBlockLostBookingCodes(v []BlockLostBookingCodeType)`

SetBlockLostBookingCodes sets BlockLostBookingCodes field to given value.

### HasBlockLostBookingCodes

`func (o *BlockLostBookingCodesCriteria) HasBlockLostBookingCodes() bool`

HasBlockLostBookingCodes returns a boolean if a field has been set.

### GetLinks

`func (o *BlockLostBookingCodesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockLostBookingCodesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockLostBookingCodesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockLostBookingCodesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockLostBookingCodesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockLostBookingCodesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockLostBookingCodesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockLostBookingCodesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


