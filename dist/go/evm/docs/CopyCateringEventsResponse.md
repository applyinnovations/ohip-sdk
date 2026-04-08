# CopyCateringEventsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyCateringEventsProcessedInfoList** | Pointer to [**[]CateringEventsProcessedInfoType**](CateringEventsProcessedInfoType.md) | Status/Info of the processed events. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewCopyCateringEventsResponse

`func NewCopyCateringEventsResponse() *CopyCateringEventsResponse`

NewCopyCateringEventsResponse instantiates a new CopyCateringEventsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyCateringEventsResponseWithDefaults

`func NewCopyCateringEventsResponseWithDefaults() *CopyCateringEventsResponse`

NewCopyCateringEventsResponseWithDefaults instantiates a new CopyCateringEventsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyCateringEventsProcessedInfoList

`func (o *CopyCateringEventsResponse) GetCopyCateringEventsProcessedInfoList() []CateringEventsProcessedInfoType`

GetCopyCateringEventsProcessedInfoList returns the CopyCateringEventsProcessedInfoList field if non-nil, zero value otherwise.

### GetCopyCateringEventsProcessedInfoListOk

`func (o *CopyCateringEventsResponse) GetCopyCateringEventsProcessedInfoListOk() (*[]CateringEventsProcessedInfoType, bool)`

GetCopyCateringEventsProcessedInfoListOk returns a tuple with the CopyCateringEventsProcessedInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyCateringEventsProcessedInfoList

`func (o *CopyCateringEventsResponse) SetCopyCateringEventsProcessedInfoList(v []CateringEventsProcessedInfoType)`

SetCopyCateringEventsProcessedInfoList sets CopyCateringEventsProcessedInfoList field to given value.

### HasCopyCateringEventsProcessedInfoList

`func (o *CopyCateringEventsResponse) HasCopyCateringEventsProcessedInfoList() bool`

HasCopyCateringEventsProcessedInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *CopyCateringEventsResponse) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyCateringEventsResponse) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyCateringEventsResponse) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyCateringEventsResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyCateringEventsResponse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyCateringEventsResponse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyCateringEventsResponse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyCateringEventsResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


