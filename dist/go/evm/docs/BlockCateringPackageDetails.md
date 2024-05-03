# BlockCateringPackageDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateCateringPackageProcessedInfoList** | Pointer to [**[]CateringEventsProcessedInfoType**](CateringEventsProcessedInfoType.md) | Status/Info of the processed package. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewBlockCateringPackageDetails

`func NewBlockCateringPackageDetails() *BlockCateringPackageDetails`

NewBlockCateringPackageDetails instantiates a new BlockCateringPackageDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCateringPackageDetailsWithDefaults

`func NewBlockCateringPackageDetailsWithDefaults() *BlockCateringPackageDetails`

NewBlockCateringPackageDetailsWithDefaults instantiates a new BlockCateringPackageDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateCateringPackageProcessedInfoList

`func (o *BlockCateringPackageDetails) GetCreateCateringPackageProcessedInfoList() []CateringEventsProcessedInfoType`

GetCreateCateringPackageProcessedInfoList returns the CreateCateringPackageProcessedInfoList field if non-nil, zero value otherwise.

### GetCreateCateringPackageProcessedInfoListOk

`func (o *BlockCateringPackageDetails) GetCreateCateringPackageProcessedInfoListOk() (*[]CateringEventsProcessedInfoType, bool)`

GetCreateCateringPackageProcessedInfoListOk returns a tuple with the CreateCateringPackageProcessedInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateCateringPackageProcessedInfoList

`func (o *BlockCateringPackageDetails) SetCreateCateringPackageProcessedInfoList(v []CateringEventsProcessedInfoType)`

SetCreateCateringPackageProcessedInfoList sets CreateCateringPackageProcessedInfoList field to given value.

### HasCreateCateringPackageProcessedInfoList

`func (o *BlockCateringPackageDetails) HasCreateCateringPackageProcessedInfoList() bool`

HasCreateCateringPackageProcessedInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *BlockCateringPackageDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockCateringPackageDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockCateringPackageDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockCateringPackageDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockCateringPackageDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockCateringPackageDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockCateringPackageDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockCateringPackageDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


