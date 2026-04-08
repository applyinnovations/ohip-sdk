# GamingRequestStatusInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatusInfo** | Pointer to [**[]GamingRequestStatusType**](GamingRequestStatusType.md) | List of guest request status details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGamingRequestStatusInfo

`func NewGamingRequestStatusInfo() *GamingRequestStatusInfo`

NewGamingRequestStatusInfo instantiates a new GamingRequestStatusInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGamingRequestStatusInfoWithDefaults

`func NewGamingRequestStatusInfoWithDefaults() *GamingRequestStatusInfo`

NewGamingRequestStatusInfoWithDefaults instantiates a new GamingRequestStatusInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatusInfo

`func (o *GamingRequestStatusInfo) GetStatusInfo() []GamingRequestStatusType`

GetStatusInfo returns the StatusInfo field if non-nil, zero value otherwise.

### GetStatusInfoOk

`func (o *GamingRequestStatusInfo) GetStatusInfoOk() (*[]GamingRequestStatusType, bool)`

GetStatusInfoOk returns a tuple with the StatusInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusInfo

`func (o *GamingRequestStatusInfo) SetStatusInfo(v []GamingRequestStatusType)`

SetStatusInfo sets StatusInfo field to given value.

### HasStatusInfo

`func (o *GamingRequestStatusInfo) HasStatusInfo() bool`

HasStatusInfo returns a boolean if a field has been set.

### GetLinks

`func (o *GamingRequestStatusInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GamingRequestStatusInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GamingRequestStatusInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GamingRequestStatusInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GamingRequestStatusInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GamingRequestStatusInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GamingRequestStatusInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GamingRequestStatusInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


