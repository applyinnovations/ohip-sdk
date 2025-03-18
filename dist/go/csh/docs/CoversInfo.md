# CoversInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CoversInfo** | Pointer to [**[]CoversInfoType**](CoversInfoType.md) | List of TransactionCode. Contains information on Transaction Code with Covers Info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCoversInfo

`func NewCoversInfo() *CoversInfo`

NewCoversInfo instantiates a new CoversInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCoversInfoWithDefaults

`func NewCoversInfoWithDefaults() *CoversInfo`

NewCoversInfoWithDefaults instantiates a new CoversInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCoversInfo

`func (o *CoversInfo) GetCoversInfo() []CoversInfoType`

GetCoversInfo returns the CoversInfo field if non-nil, zero value otherwise.

### GetCoversInfoOk

`func (o *CoversInfo) GetCoversInfoOk() (*[]CoversInfoType, bool)`

GetCoversInfoOk returns a tuple with the CoversInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoversInfo

`func (o *CoversInfo) SetCoversInfo(v []CoversInfoType)`

SetCoversInfo sets CoversInfo field to given value.

### HasCoversInfo

`func (o *CoversInfo) HasCoversInfo() bool`

HasCoversInfo returns a boolean if a field has been set.

### GetLinks

`func (o *CoversInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CoversInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CoversInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CoversInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CoversInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CoversInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CoversInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CoversInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


