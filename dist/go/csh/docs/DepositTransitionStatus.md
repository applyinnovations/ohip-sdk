# DepositTransitionStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Folios** | Pointer to [**[]FolioShortInfoType**](FolioShortInfoType.md) | This element returns any automatically generated folios during check-in, based on the Fetch Instruction \&quot;AutoFolios\&quot;. When the parameter \&quot;Auto Generate Credit Bill for Deposit upon Check In\&quot; is enabled, during check-in credit bills are automatically generated for the deposits. The generated credit bill details are returned so that user can preview/print the folio. For some countries like Portugal, it is mandatory to print the folio and hence this information is needed | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDepositTransitionStatus

`func NewDepositTransitionStatus() *DepositTransitionStatus`

NewDepositTransitionStatus instantiates a new DepositTransitionStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositTransitionStatusWithDefaults

`func NewDepositTransitionStatusWithDefaults() *DepositTransitionStatus`

NewDepositTransitionStatusWithDefaults instantiates a new DepositTransitionStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolios

`func (o *DepositTransitionStatus) GetFolios() []FolioShortInfoType`

GetFolios returns the Folios field if non-nil, zero value otherwise.

### GetFoliosOk

`func (o *DepositTransitionStatus) GetFoliosOk() (*[]FolioShortInfoType, bool)`

GetFoliosOk returns a tuple with the Folios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolios

`func (o *DepositTransitionStatus) SetFolios(v []FolioShortInfoType)`

SetFolios sets Folios field to given value.

### HasFolios

`func (o *DepositTransitionStatus) HasFolios() bool`

HasFolios returns a boolean if a field has been set.

### GetLinks

`func (o *DepositTransitionStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DepositTransitionStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DepositTransitionStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DepositTransitionStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DepositTransitionStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DepositTransitionStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DepositTransitionStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DepositTransitionStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


