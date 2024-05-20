# HotelInterfaceDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryInfo** | Pointer to [**InterfacePrimaryInfoType**](InterfacePrimaryInfoType.md) |  | [optional] 
**AdditionalInfo** | Pointer to [**InterfaceAdditionalInfoType**](InterfaceAdditionalInfoType.md) |  | [optional] 
**GeneralInfo** | Pointer to [**GeneralInfoType**](GeneralInfoType.md) |  | [optional] 
**CommunicationInfo** | Pointer to [**InterfaceCommunicationInfoType**](InterfaceCommunicationInfoType.md) |  | [optional] 
**TranslationInfo** | Pointer to [**TranslationType**](TranslationType.md) |  | [optional] 
**ClassOfServiceInfo** | Pointer to [**ClassOfServiceType**](ClassOfServiceType.md) |  | [optional] 
**ImportRoomsInfo** | Pointer to [**ImportRoomsType**](ImportRoomsType.md) |  | [optional] 
**WorkstationSetupInfo** | Pointer to [**[]InterfaceWorkstationType**](InterfaceWorkstationType.md) | List of workstations of a hotel interface. | [optional] 
**PostingsInfo** | Pointer to [**PostingInfoType**](PostingInfoType.md) |  | [optional] 
**CustomDataInfo** | Pointer to [**InterfaceCustomDataInfoType**](InterfaceCustomDataInfoType.md) |  | [optional] 
**ExportDataInfo** | Pointer to [**InterfaceExportDataInfoType**](InterfaceExportDataInfoType.md) |  | [optional] 
**TransactionsInfo** | Pointer to [**TransactionCodeInfoType**](TransactionCodeInfoType.md) |  | [optional] 

## Methods

### NewHotelInterfaceDetailType

`func NewHotelInterfaceDetailType() *HotelInterfaceDetailType`

NewHotelInterfaceDetailType instantiates a new HotelInterfaceDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelInterfaceDetailTypeWithDefaults

`func NewHotelInterfaceDetailTypeWithDefaults() *HotelInterfaceDetailType`

NewHotelInterfaceDetailTypeWithDefaults instantiates a new HotelInterfaceDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryInfo

`func (o *HotelInterfaceDetailType) GetPrimaryInfo() InterfacePrimaryInfoType`

GetPrimaryInfo returns the PrimaryInfo field if non-nil, zero value otherwise.

### GetPrimaryInfoOk

`func (o *HotelInterfaceDetailType) GetPrimaryInfoOk() (*InterfacePrimaryInfoType, bool)`

GetPrimaryInfoOk returns a tuple with the PrimaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryInfo

`func (o *HotelInterfaceDetailType) SetPrimaryInfo(v InterfacePrimaryInfoType)`

SetPrimaryInfo sets PrimaryInfo field to given value.

### HasPrimaryInfo

`func (o *HotelInterfaceDetailType) HasPrimaryInfo() bool`

HasPrimaryInfo returns a boolean if a field has been set.

### GetAdditionalInfo

`func (o *HotelInterfaceDetailType) GetAdditionalInfo() InterfaceAdditionalInfoType`

GetAdditionalInfo returns the AdditionalInfo field if non-nil, zero value otherwise.

### GetAdditionalInfoOk

`func (o *HotelInterfaceDetailType) GetAdditionalInfoOk() (*InterfaceAdditionalInfoType, bool)`

GetAdditionalInfoOk returns a tuple with the AdditionalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalInfo

`func (o *HotelInterfaceDetailType) SetAdditionalInfo(v InterfaceAdditionalInfoType)`

SetAdditionalInfo sets AdditionalInfo field to given value.

### HasAdditionalInfo

`func (o *HotelInterfaceDetailType) HasAdditionalInfo() bool`

HasAdditionalInfo returns a boolean if a field has been set.

### GetGeneralInfo

`func (o *HotelInterfaceDetailType) GetGeneralInfo() GeneralInfoType`

GetGeneralInfo returns the GeneralInfo field if non-nil, zero value otherwise.

### GetGeneralInfoOk

`func (o *HotelInterfaceDetailType) GetGeneralInfoOk() (*GeneralInfoType, bool)`

GetGeneralInfoOk returns a tuple with the GeneralInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneralInfo

`func (o *HotelInterfaceDetailType) SetGeneralInfo(v GeneralInfoType)`

SetGeneralInfo sets GeneralInfo field to given value.

### HasGeneralInfo

`func (o *HotelInterfaceDetailType) HasGeneralInfo() bool`

HasGeneralInfo returns a boolean if a field has been set.

### GetCommunicationInfo

`func (o *HotelInterfaceDetailType) GetCommunicationInfo() InterfaceCommunicationInfoType`

GetCommunicationInfo returns the CommunicationInfo field if non-nil, zero value otherwise.

### GetCommunicationInfoOk

`func (o *HotelInterfaceDetailType) GetCommunicationInfoOk() (*InterfaceCommunicationInfoType, bool)`

GetCommunicationInfoOk returns a tuple with the CommunicationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationInfo

`func (o *HotelInterfaceDetailType) SetCommunicationInfo(v InterfaceCommunicationInfoType)`

SetCommunicationInfo sets CommunicationInfo field to given value.

### HasCommunicationInfo

`func (o *HotelInterfaceDetailType) HasCommunicationInfo() bool`

HasCommunicationInfo returns a boolean if a field has been set.

### GetTranslationInfo

`func (o *HotelInterfaceDetailType) GetTranslationInfo() TranslationType`

GetTranslationInfo returns the TranslationInfo field if non-nil, zero value otherwise.

### GetTranslationInfoOk

`func (o *HotelInterfaceDetailType) GetTranslationInfoOk() (*TranslationType, bool)`

GetTranslationInfoOk returns a tuple with the TranslationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationInfo

`func (o *HotelInterfaceDetailType) SetTranslationInfo(v TranslationType)`

SetTranslationInfo sets TranslationInfo field to given value.

### HasTranslationInfo

`func (o *HotelInterfaceDetailType) HasTranslationInfo() bool`

HasTranslationInfo returns a boolean if a field has been set.

### GetClassOfServiceInfo

`func (o *HotelInterfaceDetailType) GetClassOfServiceInfo() ClassOfServiceType`

GetClassOfServiceInfo returns the ClassOfServiceInfo field if non-nil, zero value otherwise.

### GetClassOfServiceInfoOk

`func (o *HotelInterfaceDetailType) GetClassOfServiceInfoOk() (*ClassOfServiceType, bool)`

GetClassOfServiceInfoOk returns a tuple with the ClassOfServiceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassOfServiceInfo

`func (o *HotelInterfaceDetailType) SetClassOfServiceInfo(v ClassOfServiceType)`

SetClassOfServiceInfo sets ClassOfServiceInfo field to given value.

### HasClassOfServiceInfo

`func (o *HotelInterfaceDetailType) HasClassOfServiceInfo() bool`

HasClassOfServiceInfo returns a boolean if a field has been set.

### GetImportRoomsInfo

`func (o *HotelInterfaceDetailType) GetImportRoomsInfo() ImportRoomsType`

GetImportRoomsInfo returns the ImportRoomsInfo field if non-nil, zero value otherwise.

### GetImportRoomsInfoOk

`func (o *HotelInterfaceDetailType) GetImportRoomsInfoOk() (*ImportRoomsType, bool)`

GetImportRoomsInfoOk returns a tuple with the ImportRoomsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportRoomsInfo

`func (o *HotelInterfaceDetailType) SetImportRoomsInfo(v ImportRoomsType)`

SetImportRoomsInfo sets ImportRoomsInfo field to given value.

### HasImportRoomsInfo

`func (o *HotelInterfaceDetailType) HasImportRoomsInfo() bool`

HasImportRoomsInfo returns a boolean if a field has been set.

### GetWorkstationSetupInfo

`func (o *HotelInterfaceDetailType) GetWorkstationSetupInfo() []InterfaceWorkstationType`

GetWorkstationSetupInfo returns the WorkstationSetupInfo field if non-nil, zero value otherwise.

### GetWorkstationSetupInfoOk

`func (o *HotelInterfaceDetailType) GetWorkstationSetupInfoOk() (*[]InterfaceWorkstationType, bool)`

GetWorkstationSetupInfoOk returns a tuple with the WorkstationSetupInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkstationSetupInfo

`func (o *HotelInterfaceDetailType) SetWorkstationSetupInfo(v []InterfaceWorkstationType)`

SetWorkstationSetupInfo sets WorkstationSetupInfo field to given value.

### HasWorkstationSetupInfo

`func (o *HotelInterfaceDetailType) HasWorkstationSetupInfo() bool`

HasWorkstationSetupInfo returns a boolean if a field has been set.

### GetPostingsInfo

`func (o *HotelInterfaceDetailType) GetPostingsInfo() PostingInfoType`

GetPostingsInfo returns the PostingsInfo field if non-nil, zero value otherwise.

### GetPostingsInfoOk

`func (o *HotelInterfaceDetailType) GetPostingsInfoOk() (*PostingInfoType, bool)`

GetPostingsInfoOk returns a tuple with the PostingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingsInfo

`func (o *HotelInterfaceDetailType) SetPostingsInfo(v PostingInfoType)`

SetPostingsInfo sets PostingsInfo field to given value.

### HasPostingsInfo

`func (o *HotelInterfaceDetailType) HasPostingsInfo() bool`

HasPostingsInfo returns a boolean if a field has been set.

### GetCustomDataInfo

`func (o *HotelInterfaceDetailType) GetCustomDataInfo() InterfaceCustomDataInfoType`

GetCustomDataInfo returns the CustomDataInfo field if non-nil, zero value otherwise.

### GetCustomDataInfoOk

`func (o *HotelInterfaceDetailType) GetCustomDataInfoOk() (*InterfaceCustomDataInfoType, bool)`

GetCustomDataInfoOk returns a tuple with the CustomDataInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomDataInfo

`func (o *HotelInterfaceDetailType) SetCustomDataInfo(v InterfaceCustomDataInfoType)`

SetCustomDataInfo sets CustomDataInfo field to given value.

### HasCustomDataInfo

`func (o *HotelInterfaceDetailType) HasCustomDataInfo() bool`

HasCustomDataInfo returns a boolean if a field has been set.

### GetExportDataInfo

`func (o *HotelInterfaceDetailType) GetExportDataInfo() InterfaceExportDataInfoType`

GetExportDataInfo returns the ExportDataInfo field if non-nil, zero value otherwise.

### GetExportDataInfoOk

`func (o *HotelInterfaceDetailType) GetExportDataInfoOk() (*InterfaceExportDataInfoType, bool)`

GetExportDataInfoOk returns a tuple with the ExportDataInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportDataInfo

`func (o *HotelInterfaceDetailType) SetExportDataInfo(v InterfaceExportDataInfoType)`

SetExportDataInfo sets ExportDataInfo field to given value.

### HasExportDataInfo

`func (o *HotelInterfaceDetailType) HasExportDataInfo() bool`

HasExportDataInfo returns a boolean if a field has been set.

### GetTransactionsInfo

`func (o *HotelInterfaceDetailType) GetTransactionsInfo() TransactionCodeInfoType`

GetTransactionsInfo returns the TransactionsInfo field if non-nil, zero value otherwise.

### GetTransactionsInfoOk

`func (o *HotelInterfaceDetailType) GetTransactionsInfoOk() (*TransactionCodeInfoType, bool)`

GetTransactionsInfoOk returns a tuple with the TransactionsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionsInfo

`func (o *HotelInterfaceDetailType) SetTransactionsInfo(v TransactionCodeInfoType)`

SetTransactionsInfo sets TransactionsInfo field to given value.

### HasTransactionsInfo

`func (o *HotelInterfaceDetailType) HasTransactionsInfo() bool`

HasTransactionsInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


